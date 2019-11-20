const Storage = require('../../db/DBStorage');

// GET /v1/memo
exports.getAll = async (req, res, next) => {
	try {
		const datas = await Storage.findAllMemos({ account: { ...req.session.userinfo }.account });
		res.json(datas);
	} catch (err) {
		next(err);
	}
};

// POST /v1/memo
exports.post = async (req, res, next) => {
	const { memo } = req.body;
	if (!memo) return next({ message: 'memo is empty' });

	try {
		const data = await Storage.createMemo({ memo, account: { ...req.session.userinfo }.account });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		next(err);
	}
};

// PUT /v1/memo/:id
exports.put = async (req, res, next) => {
	const { memo } = req.body;
	const { id } = req.params;
	if (!memo) return next({ message: 'memo is empty' });
	if (!id) return next({ message: 'id is empty' });

	try {
		const data = await Storage.updateMemo({ id, memo, account: { ...req.session.userinfo }.account });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		next(err);
	}
};

// DELETE /v1/memo/:id
exports.remove = async (req, res, next) => {
	const { id } = req.params;
	if (!id) return next({ message: 'id is empty' });

	try {
		const data = await Storage.destroyMemo({ id, account: { ...req.session.userinfo }.account });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		next(err);
	}
};
