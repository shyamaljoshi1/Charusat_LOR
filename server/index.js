const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session");
const app = express();
const personalInfo = require("./routes/personalRoute");

app.use(express.json());

app.use("/api/v1", personalInfo);

app.use(
  cookieSession({ name: "session", keys: ["lor"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.listen("3001", () => {
  console.log("Server is listening 3001!");
});
