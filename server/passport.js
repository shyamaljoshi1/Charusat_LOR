const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "378533817331-lnbvkktrokpg17ocrva4boe31kelimgb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
