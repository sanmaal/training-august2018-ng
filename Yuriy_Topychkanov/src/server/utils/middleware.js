const { verifyJWTToken } = require('../libs/auth');

module.exports.verifyJWT_MW = function (req, res, next) {
  let token = (req.method === 'POST') ? req.body.token : req.query.token;
  if (!token) {
    try {
      req.body = JSON.parse(Object.keys(req.body)[ 0 ]);
      token = req.body.token;
    } catch (err) {
      req.body = req.body
    }
  }
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
