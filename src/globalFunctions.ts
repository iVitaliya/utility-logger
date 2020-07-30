// Files...
import logger from './structures/ChildLogger.js';

const Logger: logger = new logger({
	time: true,
	timeFormat: 'hh:mm A',
	dateDisplay: Date.now(),
	showFile: true
});

export {Logger};