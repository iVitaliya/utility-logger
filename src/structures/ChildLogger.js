// Packages...
const moment = require('moment');
const chalk = require('chalk');

// Files...
const ParentLogger = require('../transport/Logger.js');

module.exports = class ChildLogger extends ParentLogger {

  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [data={}] - Options for this instance.
   */
	constructor(data = {}) {
		super(data);
		this.name = data.name || 'Utility Logger';
    }

	/**
	 * Clear method of Utility Logger.
	 */
	clear() {
		process.stderr.destroy();
	}
}

/* new Console({ 
	name: "Logger",
	color: "color code",
	date: Date.now()
}).send(); */