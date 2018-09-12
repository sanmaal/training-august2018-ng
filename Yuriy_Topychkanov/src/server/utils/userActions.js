const userApi = require('../dbApi/userApi');
const crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports.register = function registerUser(req, res) {
    const { email, password } = req.body;
    const hashPassword = createHash(password);
    userApi.saveUser(email, hashPassword)
        .then(
            () => res.send('user registered')
        )
        .catch(
            () => res.send(`User with email ${email} already registered`)
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
        return req.logIn(
            user,
          err => err ? next(err) : res.redirect('/catched-pokemons?page=1')
        );
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
