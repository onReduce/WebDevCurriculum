const { getConfig, getConfigInquirer } = require('./util');

const option = process.argv[2];
const run = async () => {
	const condition = option && ['1', '2'].includes(option);
	const config = condition ? getConfig(option) : await getConfigInquirer();
	console.info(config);
};
run();
