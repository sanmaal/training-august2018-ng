const express = require('express');
const api = require('../api.js');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

const jwt = require('jsonwebtoken');
const config = require('../middlewares/auth/authSecret');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post ('/login', (req, res, next) => {
  api.checkUser (req.body)
      .then (user => {
        if (user) {
          const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400
          });
          res.status(200).send({token: token});
          res.redirect('/');
        } else {
          return next(error)
        }
      })
      .catch (error => {
        return next(error);
      });
});

router.post ('/registration', (req, res) => {
  api.createUser (req.body)
      .then (user => {
        const token = jwt.sign({id: user._id}, config.secret, {
          expiresIn: 86400
        });
        res.status(200).send({token: token});
      })
      .catch(() => res.status(500).send('Something wrong with registration.'));
});

router.get ('/logout', (req, res, next) => {
  res.status(200).send({token: null});
});

router.post('/check-token', (req, res) => {
  const token = req.headers['access-token'];
  if (!token) {
      res.status(401).send();
  }
  res.status(200).send();
});

module.exports = router;
