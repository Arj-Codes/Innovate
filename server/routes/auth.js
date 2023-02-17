import express from "express";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
const client = new OAuth2Client(process.env.CLIENT_ID);
const router = express.Router();

router.post("/google", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  /* const user = await db.user.upsert({
    where: { email: email },
    update: { name, picture },
    create: { name, email, picture },
  });
  req.session.userId = user.id; */

  console.log({ name, email, picture });
  res.status(201);
});

router.post("/createuser", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/logout", async (req, res, next) => {
  res.cookie("access_token", "none", {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
  });

  res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
});

export default router;
