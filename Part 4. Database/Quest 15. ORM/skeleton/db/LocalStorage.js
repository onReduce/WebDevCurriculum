const db = {
	jay: [{ id: '0', memo: 'jay' }, { id: '1', memo: 'World' }],
	kei: [{ id: '0', memo: 'kei' }]
};
let count = 2;
module.exports = class LocalStorage {
	static async readAllMemos({ account }) {
		if (!db[account]) db[account] = [];
		return db[account];
	}

	static async createMemo({ account, memo }) {
		const id = String(count);
		db[account].push({ id, memo });
		count += 1;
		return db[account].find(x => x.id === id);
	}

	static async updateMemo({ account, id, memo }) {
		const index = db[account].findIndex(x => x.id === id);
		db[account][index] = { id, memo };
		return db[account][index];
	}

	static async deletMemo({ account, id }) {
		const index = db[account].findIndex(x => x.id === id);
		const data = db[account][index];
		db[account].splice(index, 1);
		return data;
	}

	static get length() {
		return length;
	}
};
