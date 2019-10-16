// const num = process.argv[2];

// console.log(require('./config' + num + '.js'));

const num = Number.parseInt(process.argv[2]);
let config = '';
if (!Number.isNaN(num)) {
	config = require('./config/variables.json').filter(x => x.name === `Config${num}`);
}
console.info(config);
