const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["innovate-user"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

mongoose.set("strictQuery", false);
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("9000", () => {
  console.log("Server is running!");
  connect();
});
