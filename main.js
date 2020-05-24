// Packages...
const path = require('path');

// Files...
const logger = require('./src/structures/ChildLogger.js');
const { Console } = require('console');

const Logger = new logger({
	time: true,
	timeFormat: 'hh:mm A',
	dateDisplay: Date.now(),
	showFile: true,
	file: __filename
});

const x = {
	id: 0,
	value: 'John Doe'
}

Logger.send(x);
