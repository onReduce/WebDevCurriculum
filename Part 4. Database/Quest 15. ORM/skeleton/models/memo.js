module.exports = (sequelize, DataTypes) => {
	return sequelize.define('memo', {
		memo: {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: '메모 내용'
		}
	}, {
		timestamps: true,
		paranoid: true,
		underscored: true,
		charset: 'utf8',
		collate: 'utf8_general_ci',
		comment: '메모'
	});
};
