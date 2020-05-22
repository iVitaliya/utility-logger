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

		// Expose the name of the LoggerConsole on the prototype.
		this.name = data.name || 'Logger Console';
		this.eol = data.eol || os.EOL;

		this.setMaxListeners(30);
	}

	/**
	 * Logging method of Utility Logger.
	 * @param {Object} - Some info...
	 * @param {Function} - callback...
	 * @returns {undefined}
	 */
	send(info, callback) {
		setImmediate(() => this.emit('Logged', info));

			if (process.stderr) {
				process.stderr.write(`${info} ${this.eol}`);
			} else {
				console.error(info);
			}

			if (process.stdout) {
				process.stdout.write(`${info} ${this.eol}`);
			}

			if (callback) {
				callback();
			}
	
	}
}