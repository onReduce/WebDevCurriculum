// Seed data
const db = [{ id: '0', memo: 'Hello' }, { id: '1', memo: 'World' }];
let count = 2;
module.exports = class LocalStorage {
	static async findAllMemos() {
		return db;
	}

	static async createMemo({ memo }) {
		const id = String(count);
		db.push({ id, memo });
		count += 1;
		return db.find(x => x.id === id);
	}

	static async updateMemo({ id, memo }) {
		const index = db.findIndex(x => x.id === id);
		db[index] = { id, memo };
		return db[index];
	}

	static async destroyMemo({ id }) {
		const index = db.findIndex(x => x.id === id);
		const data = db[index];
		db.splice(index, 1);
		return data;
	}
};
