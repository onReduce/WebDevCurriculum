// eslint-disable-next-line no-unused-vars
class Notepad {
	constructor() {
		this.url = 'http://127.0.0.1:8080/v1/memo';
	}
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	async readAllMemos() {
		return await fetch(this.url).then(res => res.json());
	}
	async createMemo({ memo }) {
		return await fetch(this.url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ memo })
		}).then(res => res.json());
	}
	async updateMemo({ id, memo }) {
		return await fetch(this.url + '/' + id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ memo })
		}).then(res => res.json());
	}
	async deleteMemo({ id }) {
		return await fetch(this.url + '/' + id, {
			method: 'DELETE'
		}).then(res => res.json());
	}
}
