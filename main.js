// Files...
const logger = require('./src/structures/ChildLogger.js');

const Logger = new logger({
	name: 'Test Logger',
	format: 'hh:mm A',
	date: Date.now()
});

Logger.send(logger.name);

Logger.clear();
