const { verifyJWTToken } = require('../libs/auth');

module.exports.verifyJWT_MW = function (req, res, next) {
  let token = (req.method === 'POST') ? req.body.token : req.query.token;

  console.log(req.query.token);
  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken.data;
      next()
    })
    .catch((err) => {
      res.status(400)
        .json({ message: "Invalid auth token provided." })
    })
};
