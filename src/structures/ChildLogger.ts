// Packages...
import moment from 'moment';
import chalk from 'chalk';

// Files...
import ParentLogger from '../transport/Logger';

export class ChildLogger extends ParentLogger {
	name: string;

  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [data={}] - Options for this instance.
   */
	constructor(data: object = {}) {
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