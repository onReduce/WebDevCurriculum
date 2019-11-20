const Storage = require('../../db/DBStorage');

// POST /v1/common/login
exports.login = async (req, res, next) => {
	const { id /* password */ } = req.body;
	if (!id) return next({ message: 'id is empty' });

	try {
		const session = req.session;
		const data = await Storage.findUser({ account: id });
		if (data && data.account === id /* && data.password === password */) {
			session.userinfo = { account: data.account, nickname: data.nickname };
		}
		res.redirect('/');
	} catch (err) {
		res.redirect('back');
	}
};

// GET /v1/common/logout
exports.logout = async (req, res) => {
	if (req.session.userinfo) {
		req.session.destroy();
		res.clearCookie('connect.sid');
	}
	res.redirect('/');
};
