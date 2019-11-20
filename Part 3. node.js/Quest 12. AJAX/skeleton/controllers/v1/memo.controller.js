const LocalStorage = require('../../db/LocalStorage');

// GET /v1/memo
const getAll = async (req, res, next) => {
	try {
		const datas = await LocalStorage.findAllMemos();
		res.json(datas);
	} catch (err) {
		next(err);
	}
};

// POST /v1/memo
const post = async (req, res, next) => {
	const { memo } = req.body;
	if (!memo) return next({ message: 'memo is empty' });

	try {
		const data = await LocalStorage.createMemo({ memo });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		next(err);
	}
};

// PUT /v1/memo/:id
const put = async (req, res, next) => {
	const { memo } = req.body;
	const { id } = req.params;
	if (!memo) return next({ message: 'memo is empty' });
	if (!id) return next({ message: 'id is empty' });

	try {
		const data = await LocalStorage.updateMemo({ id, memo });
		res.json({ id: data.id, memo: data.memo });
	} catch (err) {
		return next(err);
	}
};

// DELETE /v1/memo/:id
const remove = async (req, res, next) => {
	const { id } = req.params;
	if (!id) return next({ message: 'id is empty' });

	try {
		const data = await LocalStorage.destroyMemo({ id });
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
