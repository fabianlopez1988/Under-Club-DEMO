const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const routes = require("./routes/index");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/Users");
/* const PORT = process.env.PG_PORT || 5000 */
require("dotenv").config();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(
  sessions({
    secret: "ucweb",
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

app.use("/api", routes);

const PORT = process.env.PORT;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
});
