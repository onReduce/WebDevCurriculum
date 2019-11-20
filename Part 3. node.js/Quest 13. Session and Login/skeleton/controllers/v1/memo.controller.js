const LocalStorage = require('../../db/LocalStorage');

// GET /v1/memo
exports.getAll = async (req, res, next) => {
	try {
		const datas = await LocalStorage.findAllMemos({ userId: { ...req.session.userinfo }.id });
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
		const data = await LocalStorage.createMemo({ memo, userId: { ...req.session.userinfo }.id });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};

// PUT /v1/memo/:id
exports.put = async (req, res, next) => {
	const { memo } = req.body;
	const { id } = req.params;
	if (!memo) return next({ message: 'memo is empty' });
	if (!id) return next({ message: 'id is empty' });

	try {
		const data = await LocalStorage.updateMemo({ id, memo, userId: { ...req.session.userinfo }.id });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};

// DELETE /v1/memo/:id
exports.remove = async (req, res, next) => {
	const { id } = req.params;
	if (!id) return next({ message: 'id is empty' });

	try {
		const data = await LocalStorage.destroyMemo({ id, userId: { ...req.session.userinfo }.id });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};
