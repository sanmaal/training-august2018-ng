const userApi = require('../dbApi/userApi');
const crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports.register = function registerUser(req, res, next) {
    const { email, password } = req.body;
    const hashPassword = createHash(password);
    userApi.saveUser(email, hashPassword)
        .then(
            () => console.log('user registered')
        )
        .catch(
            err => console.log(err)
        );
};

module.exports.mustAuthenticatedMw = function (req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/');
};

module.exports.login = function (req, res, next) {
    passport.authenticate('local', doLogin)(req, res, next);

    function doLogin(err, user, info) {
        console.log(info);
        return err
            ? next(err)
            : user
                ? req.logIn(user, function (err) {
                    return err
                        ? next(err)
                        : res.redirect('/captured-pokemons');
                })
                : res.redirect('/');
    }
};

module.exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

function createHash(str) {
    try {
        return crypto.createHmac('sha256', str).update('I love cupcakes').digest('hex');
    }
    catch (e) {
        console.error(e);
    }
}

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

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
