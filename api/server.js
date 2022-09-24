const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const models = require("./models/index");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const routes = require("./routes/index");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const port = 5000;

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(
  sessions({
    secret: "UCWeb",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Incorrect username" });
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false, { message: "Incorrect password" });
            }

            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.post(
  "/login/password",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect("/~" + req.user.username);
  }
);

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
});
