// Files...
const logger = require('./src/structures/ChildLogger.js');

const Logger = new logger({
	time: true,
	timeFormat: 'hh:mm A',
	dateDisplay: Date.now(),
	showFile: true
});

module.exports = {
	Logger: Logger
}