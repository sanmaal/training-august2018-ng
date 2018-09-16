const userApi = require('../dbApi/userApi');
const crypto = require('crypto');
const passport = require('passport');
const { createJWToken } = require('../libs/auth');
const LocalStrategy = require('passport-local').Strategy;

module.exports.register = function registerUser(req, res) {
  const { email, password } = req.body;
  const hashPassword = createHash(password);
  userApi.saveUser(email, hashPassword)
    .then(
      (user) => {
        let token = createJWToken(user);
        res.json({ "token": token })
      })
    .catch(
      () => res.send({ error: `User with email ${email} already registered` })
    );
};


module.exports.login = function (req, res, next) {
  passport.authenticate('local', doLogin)(req, res, next);

  function doLogin(err, user, info) {
    let token;

    if (err) {
      return next(err)
    }
    if (info) {
      return res.send(info.message);
    }

    if (user) {
      res.status(200)
        .json({
          success: true,
          token: createJWToken({
            sessionData: user,
            maxAge: 3600
          })
        });
    } else {
      // If user is not found
      res.status(401).json(info);
    }

  }
};

module.exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};



function authenticateUser(email, password, done) {
    const hashPassword = createHash(password);

    userApi.validateUserData(email, hashPassword)
      .then(
        (user) => {
          done(null, user);
        }
      )
      .catch(
        err => typeof err === "string" ? done(null, false, { message: err }) : done(err)
      );
}

function createHash(str) {
    try {
      return crypto.createHmac('sha256', str).update('I love cupcakes').digest('hex');
    }
    catch (e) {
      console.error(e);
    }
}

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
