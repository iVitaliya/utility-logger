// Packages...
const os = require('os');
const { Stream } = require('stream');
const moment = require('moment');

module.exports = class LoggerConsole extends Stream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [data={}] - Options for this instance.
   */
	constructor(data = {}) {
		super(data);

		// Expose the name of the LoggerConsole on the prototype.
		this.name = data.name || 'Utility Logger';
		this.eol = data.eol || os.EOL;
		this.format = data.format ? data.format : 'dddd, hh:mm A';
		this.date = data.date ? moment(data.date).format(data.format) : moment(Date.now()).format(data.format);

		this.setMaxListeners(30);
	}

	/**
	 * Logging method of Utility Logger.
	 * @param {Object} - Some info...
	 * @param {Function} - callback...
	 * @returns {undefined}
	 */
	send(info, callback) {

			switch (typeof info) {
				case 'function':
					info = `[ Type: Function - Name: ${info.name} ] ${info}`;
					break;
				case 'object':
					info = `[ Type: Object - Object Values: ${Object.entries(info).length} ] ${JSON.stringify(info)}`;
					break;
				case 'string':
					info = `[ Type: String - String Length: ${info.length} chars ] ${info}`;
					break;
				case 'number': 
					info = `[ Type: Number ] ${info}`;
					break;
				case 'bigint':
					info = `[ Type: Bigint ] ${info}`;
					break;
				case 'boolean':
					info = `[ Type: Boolean ] ${info}`;
					break;
				case 'symbol': 
					info = `[ Type: Symbol ] ${info.toString()} `;
					break;
			}

			if (process.stderr) {
				process.stderr.write(`[ ${this.name} ] ( ${this.date} ) : ${info} ${this.eol}`);
			} else if (!process.stderr && process.stdout) {
				process.stdout.write(`${info} ${this.eol}`);
			}else {
				console.error(info);
			}

			if (callback) {
				callback();
			}

			return;
	}
}