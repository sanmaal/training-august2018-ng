const jwt = require('jsonwebtoken');
const { key } = require('../config');

module.exports = function(req, res, next) {
	const token = req.header('x-auth-token');
	if (!token) return next();

	try {
		const decoded = jwt.verify(token, key);
		req.user = decoded;
		next();
	} catch (err) {
		res.status(400).send('Invalid token.');
	}
};