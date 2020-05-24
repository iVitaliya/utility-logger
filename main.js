// Packages...
const path = require('path');

// Files...
const logger = require('./src/structures/ChildLogger.js');
const { Console } = require('console');

const Logger = new logger({
	name: 'Test Logger',
	format: 'hh:mm A',
	date: Date.now(),
});

const x = {
	id: 0,
	value: 'John Doe'
}

Logger.send(x);
