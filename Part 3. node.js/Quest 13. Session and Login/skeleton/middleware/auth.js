module.exports.isLoggin = (req, res, next) => {
	if (req.session.userinfo) {
		next();
	} else {
		res.redirect('/views/login.html');
	}
};
