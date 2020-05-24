// Packages...
const moment = require('moment');
const chalk = require('chalk');

// Files...
const ParentLogger = require('../transport/Logger.js');
const Send = require('../Send.js');

module.exports = class ChildLogger extends ParentLogger {

  /**
   * @param {Object} [data={}] - Options for the Logger instance...
   */
	constructor(data = {}) {
		super(data);
		this.name = data.name
    }

	/**
	 * Clear method of Utility Logger.
	 */
	clear() {
		process.stderr.destroy();
	}

	/**
	 * Core send part of Utility Logger.
	 */
	send = new Send();
}

/* new Console({ 
	name: "Logger",
	color: "color code",
	date: Date.now()
}).send(); */