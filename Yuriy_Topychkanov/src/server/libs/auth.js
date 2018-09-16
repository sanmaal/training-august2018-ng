const jwt = require('jsonwebtoken');

module.exports.verifyJWTToken = function (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'MY-SECRET', (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err)
      }

      resolve(decodedToken)
    })
  })
};

module.exports.createJWToken = function (details) {
  if (typeof details !== 'object') {
    details = {}
  }

  if (!details.maxAge || typeof details.maxAge !== 'number') {
    details.maxAge = 3600
  }

  let token = jwt.sign(
    { data: details.sessionData },
    'MY-SECRET',
    {
      expiresIn: details.maxAge,
      algorithm: 'HS256'
    });

  return token
};

