module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		account: {
			type: DataTypes.STRING(128),
			allowNull: false,
			unique: true,
			comment: '계정'
		},
		password: {
			type: DataTypes.STRING(256),
			allowNull: false,
			comment: '암호'
		},
		nickname: {
			type: DataTypes.STRING(64),
			allowNull: false,
			unique: true,
			comment: '닉네임'
		}
	}, {
		timestamps: true,
		paranoid: true,
		underscored: true,
		charset: 'utf8',
		collate: 'utf8_general_ci', 
		comment: '사용자'
	});
};
