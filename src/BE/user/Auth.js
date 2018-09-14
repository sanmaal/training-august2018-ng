const {express,app,ROUTES,path,pg,connectionString,bodyParser,bcrypt, passport, session} = require("./config");

// User API

exports.createUser = function(userData){
	var user = {
		name: userData.name,
		email: userData.email,
		password: hash(userData.password)
	}
	return new User(user).save()
}

exports.getUser = function(id) {
	return User.findOne(id)
}

exports.checkUser = function(userData) {
	return User
		.findOne({email: userData.email})
		.then(function(doc){
			if ( doc.password == hash(userData.password) ){
				console.log("User password is ok");
				return Promise.resolve(doc)
			} else {
				return Promise.reject("Error wrong")
			}
		})
}

