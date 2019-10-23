const { User, Memo } = require('../models');

module.exports = class DBStorage {
	static async readAllMemos({ account }) {
		const user = await User.findOne({ attributes: ['id'], where: { account } });
		const memos = await Memo.findAll({ attributes: ['id', 'memo'], where: { userid: user.id } });
		return memos;
	}

	static async createMemo({ account, memo }) {
		const user = await User.findOne({ attributes: ['id'], where: { account } });
		const inserted = await Memo.create({ memo, userid: user.id });
		return { id: inserted.id, memo: inserted.memo };
	}

	static async updateMemo({ id, memo }) {
		const updated = await Memo.update({ memo }, { where: { id } });
		return { id: updated.id, memo: updated.memo };
	}

	static async deletMemo({ id }) {
		const deleted = await Memo.destroy({ where: { id } });
		return { id: deleted.id, memo: deleted.memo };
	}

	static async readUser({ account }) {
		const user = await User.findOne({ attributes: ['account', 'password', 'nickname'], where: { account } });
		return user;
	}
};
