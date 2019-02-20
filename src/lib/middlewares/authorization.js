const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
	const {token} = req.cookies;
	if (!token) {
		req.userId = null;
		return next();
	}

	try {
		const {userId} = jwt.verify(
			token.replace('Bearer ', ''),
			process.env.APP_SECRET
		);

		req.userId = userId;
	} catch (error) {
		req.userId = null;
		res.clearCookie('token');
	}

	return next();
}

module.exports = {
	authorization
};
