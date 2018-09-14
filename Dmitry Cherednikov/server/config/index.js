const { user, password, host, port, name } = process.env;

module.exports = {
	// in case you are using local mongodb, replace this path with `mongodb://localhost:${port}/${name}`
	uri: `mongodb://${user}:${password}@${host}:${port}/${name}`,
	key: 'shhh',
}