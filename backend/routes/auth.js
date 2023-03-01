const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");
const CLIENT_URL = "http://localhost:3000";
const jwt = require("jsonwebtoken");

router.get("/login/success", async (req, res) => {
  //handle error later(same username case from multiple logins)

  if (req.user) {
    const profile = req.user;
    console.log(profile);
    const u = await User.findOne({ email: profile._json.email });

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
      let newUser;
      if (profile.provider === "google") {
        var str = profile._json.email;
        var gmail = str.split("@");
        var username = gmail[0];

        newUser = new User({
          username: username,
          img: profile._json.picture,
          name: profile._json.name,
          provider: profile.provider,
          email: profile._json.email,
          verified: profile._json.email_verified,
        });
      } else if (profile.provider === "github") {
        newUser = new User({
          username: profile.username,
          img: profile.photos[0].value,
          name: profile.displayName,
          provider: profile.provider,
          email: profile._json.email,
        });
      }
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT, {
        expiresIn: "24h",
      });
      res
        .cookie("access_token", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          httpOnly: true,
          secure: true,
        })
        .status(200)
        .json(newUser);
    }
  } else return;
});

router.get("/login/failed", (req, res) => {
  console.log("sad");
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

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
