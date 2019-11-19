const inquirer = require('inquirer');

const getConfig = option => {
	return require('./config/variables.json').filter(x => x.name === `Config${option}`)[0];
};
const getConfigInquirer = async () => {
	const { option } = await inquirer.prompt([
		{
			type: 'list',
			name: 'option',
			message: 'Select configuration',
			choices: ['1', '2']
		},
		{
			type: 'confirm',
			name: 'confirm',
			message: 'run'
		}
	]);
	return getConfig(option);
};

module.exports = { getConfig, getConfigInquirer };
