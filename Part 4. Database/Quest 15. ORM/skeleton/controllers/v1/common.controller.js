const Storage = require('../../db/DBStorage');

// POST /v1/common/login
const login = async (req, res) => {
	const { id /* password */ } = req.body;
	try {
		const session = req.session;
		const data = await Storage.readUser({ account: id });
		if (data.account === id /* && data.password === password */) {
			session.userinfo = { account: data.account, nickname: data.nickname };
		}
		res.redirect('/');
	} catch (err) {
		res.redirect('/');
	}
};

// GET /v1/common/logout
const logout = async (req, res) => {
	if (req.session.userinfo) {
		req.session.destroy();
		res.clearCookie('connect.sid');
	}
	res.redirect('/');
};

module.exports = {
	login,
	logout
};
