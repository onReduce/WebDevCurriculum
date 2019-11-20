const userlist = {
	jay: { id: 'jay', password: '1', nickname: 'jay' },
	kei: { id: 'kei', password: '1', nickname: 'kei' },
	ted: { id: 'ted', password: '1', nickname: 'ted' }
};

// POST /v1/common/login
exports.login = async (req, res, next) => {
	const { id /* password */ } = req.body;
	if (!id) return next({ message: 'id is empty' });

	if (userlist[id] && userlist[id].id === id /* && userlist[id].password === password */) {
		req.session.userinfo = userlist[id];
		res.redirect('/');
	} else {
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
