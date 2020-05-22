// Files...
const logger = require('./src/structures/ChildLogger.js');
const data = require('./data/sourceData.json');
const readStream = require('./src/lib/readStream.js');
const writeStream = require('./src/lib/writeStream.js');

const rStream = readStream('./data/sourceData.json', 'utf8');

const Logger = new logger({
	name: 'Test Logger',
	format: 'dddd, hh:mm A',
	date: Date.now()
});

Logger.data('name');