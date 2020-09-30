// Packages...
import os from 'os';
import { Stream } from 'stream';
import moment from 'moment';
import path from 'path';
import { inspect } from 'util';
// Files...
import { getLocation } from '../Logger/getLocation';

export default class LoggerConsole extends Stream {
	readonly name: string;
	readonly eol: any;
	readonly time: boolean;
	readonly timeFormat: string;
	readonly dateDisplay: number|string;
	readonly showFile: boolean;
	readonly file: any;

  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {Object} [data] - Options for this instance.
   */
	constructor(data: {
		name: string,
		eol: any,
		time: boolean,
		timeFormat: string,
		dateDisplay: number|string,
		showFile: boolean
	}) {
		super();

		// Expose the name of the LoggerConsole on the prototype.
		this.name = data.name || 'Utility Logger';
		this.eol = data.eol || os.EOL;
		this.time = data.time || false;
		this.timeFormat = data.timeFormat ? data.timeFormat : 'dddd, hh:mm A';
		this.dateDisplay = data.dateDisplay ? moment(data.dateDisplay).format(data.timeFormat) : moment(Date.now()).format(data.timeFormat);
		this.showFile = data.showFile || false;
		this.file = getLocation(3);

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
					info = `[ Type: Object ] ${inspect(info, false, 2, true)}`;
					break;
				case 'string':
					info = `[ Type: String ] ${info}`;
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
				if (this.showFile === true && this.time === true) {
					process.stderr.write(`[ ${this.name} - ${path.basename(this.file)} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else if (this.showFile === true && this.time === false) {
					process.stderr.write(`[ ${this.name} - ${path.basename(this.file)} ] : ${info} ${this.eol}`);
				} else if (this.showFile === false && this.time === true) {
					process.stderr.write(`[ ${this.name} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else {
					process.stderr.write(`[ ${this.name} ] : ${info} ${this.eol}`);
				}
			} else if (!process.stderr && process.stdout) {
				if (this.showFile === true && this.time === true) {
					process.stdout.write(`[ ${this.name} - ${path.basename(this.file)} ] ( ${this.dateDisplay} ) : ${info} ${this.eol}`);
				} else if (this.showFile === true && this.time === false) {
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