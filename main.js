// Files...
const logger = require('./src/structures/ChildLogger.js');
const { Console } = require('console');

const Logger = new logger({
	name: 'Test Logger',
	format: 'hh:mm A',
	date: Date.now()
});

const x = {
	value: 20,
	id: 0
}

Logger.send(x);
