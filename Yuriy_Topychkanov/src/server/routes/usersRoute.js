const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
const userActions = require('../utils/userActions');
module.exports = function (app) {
  app.post('/user/register', (req, res, next) => {
    userActions.register(req, res, next);
  });
  app.post('/user/login', (req, res, next) => {
    userActions.login(req, res, next);
  });
  app.post('/user/logout', auth, (req, res) => {
    userActions.logout(req, res);
  });


};
