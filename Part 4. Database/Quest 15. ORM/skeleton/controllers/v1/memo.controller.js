const Storage = require('../../db/DBStorage');

// GET /v1/memo
const getAll = async (req, res, next) => {
	try {
		const datas = await Storage.readAllMemos({ account: { ...req.session.userinfo }.account });
		res.json(datas);
	} catch (err) {
		next(err);
	}
};

// POST /v1/memo
const post = async (req, res, next) => {
	const { memo } = req.body;
	if (!memo) return next({ stack: 'memo is empty' });

	try {
		const data = await Storage.createMemo({ memo, account: { ...req.session.userinfo }.account });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};

// PUT /v1/memo/:id
const put = async (req, res, next) => {
	const { memo } = req.body;
	const { id } = req.params;
	if (!memo) return next({ stack: 'memo is empty' });
	if (!id) return next({ stack: 'id is empty' });

	try {
		const data = await Storage.updateMemo({ id, memo, account: { ...req.session.userinfo }.account });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};

// DELETE /v1/memo/:id
const remove = async (req, res, next) => {
	const { id } = req.params;
	if (!id) return next({ stack: 'id is empty' });

	try {
		const data = await Storage.deletMemo({ id, account: { ...req.session.userinfo }.account });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};

module.exports = {
	getAll,
	post,
	put,
	remove
};
