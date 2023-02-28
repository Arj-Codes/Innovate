const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");
const CLIENT_URL = "http://localhost:3000/";
const jwt = require("jsonwebtoken");

router.get("/login/success", async (req, res) => {
  if (req.user) {
    const u = await User.findOne({ username: req.user.displayName });

    if (u) {
      const token = jwt.sign({ id: u._id }, process.env.JWT, {
        expiresIn: "24h",
      });

      res
        .cookie("access_token", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          httpOnly: true,
          secure: true,
        })
        .status(200)
        .json(u);
    } else {
      const profile = req.user;
      const newUser = new User({
        username: profile.displayName,
        img: profile.photos[0].value,
        name: profile.name.givenName,
        provider: profile.provider,
      });
      await newUser.save();
      res
        .cookie("access_token", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          httpOnly: true,
          secure: true,
        })
        .status(200)
        .json(newUser);
    }
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
