const User = require('../models/user');

module.exports.saveUser = function (email, password) {
    const user = new User({ email: email, password: password, capturedPokemons: [] });
    return user.save()
        .then(
            docs => Promise.resolve(docs),
            err => Promise.reject(err.errmsg)
        )
};

module.exports.validateUserData = function (email, password) {

    return findUser(email)
        .then(
            user => user.password === password ? Promise.resolve(user) : Promise.reject('The password is incorrect'),
            err  => Promise.reject(err)
        );

    function findUser(email) {
        return User.findOne({ email: email })
            .then(
                docs => docs ? Promise.resolve(docs) : Promise.reject('User with specified email not found'),
                err => Promise.reject(err)
            );
    }
};
