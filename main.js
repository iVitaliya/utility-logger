// Files...
const logger = require('./src/structures/ChildLogger.js');
const { Console } = require('console');

const Logger = new logger({
	name: 'Test Logger',
	format: 'hh:mm A',
	date: Date.now()
});

const x = {
	data: 'none',
	number: 0
}

Logger.send(x);
