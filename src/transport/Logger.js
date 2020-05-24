// Packages...
const os = require('os');
const { Stream } = require('stream');
const moment = require('moment');
const path = require('path');

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
		this.time = data.time || false;
		this.timeFormat = data.timeFormat ? data.timeFormat : 'dddd, hh:mm A';
		this.dateDisplay = data.dateDisplay ? moment(data.dateDisplay).format(data.timeFormat) : moment(Date.now()).format(data.timeFormat);
		this.showFile = data.showFile || false;
		this.file = data.file || '';

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
				if (this.showFile === true && this.file && this.time === true) {
					process.stderr.write(`[ ${this.name} - ${path.basename(this.file)} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else if (this.showFile === true && this.file && this.time === false) {
					process.stderr.write(`[ ${this.name} - ${path.basename(this.file)} ] : ${info} ${this.eol}`);
				} else if (this.showFile === false && this.time === true) {
					process.stderr.write(`[ ${this.name} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else {
					process.stderr.write(`[ ${this.name} ] : ${info} ${this.eol}`);
				}
			} else if (!process.stderr && process.stdout) {
				if (this.showFile === true && this.file && this.time === true) {
					process.stdout.write(`[ ${this.name} - ${path.basename(this.file)} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else if (this.showFile === true && this.file && this.time === false) {
					process.stdout.write(`[ ${this.name} - ${path.basename(this.file)} ] : ${info} ${this.eol}`);
				} else if (this.showFile === false && this.time === true) {
					process.stdout.write(`[ ${this.name} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else {
					process.stdout.write(`[ ${this.name} ] : ${info} ${this.eol}`);
				}
			}else {
				console.error(info);
			}

			if (callback) {
				callback();
			}

			return;
	}
}