// Packages...
const os = require('os');
const { Stream } = require("stream");
const isStream = require("is-stream");


/**
 * Outputting to the console.
 * @type {Console}
 * @extends {Stream}
 */
module.exports = class LoggerConsole extends Stream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [data={}] - Options for this instance.
   */
	constructor(data = {}) {
		super(data);
	}
}