const db = {
	jay: [{ id: '0', memo: 'jay' }, { id: '1', memo: 'World' }],
	kei: [{ id: '0', memo: 'kei' }]
};
let count = 2;
module.exports = class LocalStorage {
	static async readAllMemos({ userId }) {
		if (!db[userId]) db[userId] = [];
		return db[userId];
	}

	static async createMemo({ userId, memo }) {
		const id = String(count);
		db[userId].push({ id, memo });
		count += 1;
		return db[userId].find(x => x.id === id);
	}

	static async updateMemo({ userId, id, memo }) {
		const index = db[userId].findIndex(x => x.id === id);
		db[userId][index] = { id, memo };
		return db[userId][index];
	}

	static async deletMemo({ userId, id }) {
		const index = db[userId].findIndex(x => x.id === id);
		const data = db[userId][index];
		db[userId].splice(index, 1);
		return data;
	}

	static get length() {
		return length;
	}
};
