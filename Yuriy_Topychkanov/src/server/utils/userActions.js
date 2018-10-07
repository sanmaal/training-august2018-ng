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
      () => res.status(200).json({ status: 'success' }))
    .catch(
      (err) => res.json({ error: `${err}` })
    );
};


module.exports.login = function (req, res, next) {
  passport.authenticate('local', doLogin)(req, res, next);

  function doLogin(err, user, info) {
    if (err) {
      return next(err)
    }
    if (info) {
      return res.send(info.message);
    }

    if (user) {
      const token = createJWToken({ sessionData: user, maxAge: 3600 });

      res.status(200)
        .json({
          success: true,
          token: token
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
      err => done(null, false, { message: err })
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
