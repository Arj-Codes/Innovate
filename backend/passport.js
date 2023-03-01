const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User = require("./models/User");

const GOOGLE_CLIENT_ID =
  "978340525812-2c50if014gqu88d7dke9lmhiv2jn56bm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "0f58b6341317a6e5095c";
GITHUB_CLIENT_SECRET = "8b9fc958e13e7415e0aabeb97e5533ad59f008ac";
/*
FACEBOOK_APP_ID = "your id";
FACEBOOK_APP_SECRET = "your id"; */

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: "0f58b6341317a6e5095c",
      clientSecret: "8b9fc958e13e7415e0aabeb97e5533ad59f008ac",
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

/*
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
); */

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
