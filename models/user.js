const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.statics.findUserByCredentials = async function (email, password) {
	try {
		const user = await this.findOne({ email });
		if (!user) {
			return Promise.reject(new Error("Неправильные почта или пароль"));
		}
		else {
			const matched = await bcrypt.compare(password, user.password);
			if (!matched) {
				console.log('no match');
				return Promise.reject(new Error('Неправильные почта или пароль'));
			}
			return user;
		}
	} 
	catch (error) {
		//console.log(error)
		return Promise.reject(new Error('Неправильные почта или пароль'));
	}
};

module.exports = mongoose.model('user', userSchema);