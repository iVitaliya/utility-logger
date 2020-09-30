// Files...
import logger from './src/structures/ChildLogger.js';

const Logger = new logger({
	time: true,
	timeFormat: 'hh:mm A',
	dateDisplay: Date.now(),
	showFile: true
});

export = {
	Logger: Logger
}