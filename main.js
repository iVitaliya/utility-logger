// Files...
const logger = require('./src/structures/ChildLogger.js');
const { Console } = require('console');

const Logger = new logger({
	name: 'Test Logger',
	format: 'hh:mm A',
	date: Date.now()
});

const x = Symbol('yes');

Logger.send(x);
