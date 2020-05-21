// Packages...
const chalk = require('chalk');
const moment = require('moment');

// Files...
const BaseLogger = require("./structures/Logger.js");

class Send extends BaseLogger {
    constructor(data = {}) {
        super();
    }

    /**
     * @param {string} color - The color the logger needs to be...
     * @param {string} msg - The message that needs to be sent...
     * @param {boolean} del - If the console needs to clear itself first...
	 * @param {string} type - The type of the console...
     * @param {string} format - If the log needs to be bold or italic...
     */
    send(color, msg, del, type, format) {
		if (typeof color !== 'string' || !color) color = '#fcfcfc';
        if (!msg) msg = '';
        if (typeof del !== 'boolean' || !del) del = false;
        if (typeof type !== 'string' || !type) type = 'log';
        if (typeof format !== 'string' || !format) format = 'none';

        switch (type.toLowerCase()) {
            case 'log':
                switch (format.toLowerCase()) {
                    case 'none':
                        if (!del) {
                            console.log(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.log(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'bold':
                        if (!del) {
                            console.log(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.log(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'underline':
                        if (!del) {
                            console.log(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.log(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'strikethrough':
                        if (!del) {
                            console.log(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.log(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;
                }

                break;

            case 'debug':
                switch (format.toLowerCase()) {
                    case 'none':
                        if (!del) {
                            console.debug(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.debug(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'bold':
                        if (!del) {
                            console.debug(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.debug(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'underline':
                        if (!del) {
                            console.debug(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.debug(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'strikethrough':
                        if (!del) {
                            console.debug(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.debug(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;
                }

                break;

            case 'warn':
                switch (format.toLowerCase()) {
                    case 'none':
                        if (!del) {
                            console.warn(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.warn(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'bold':
                        if (!del) {
                            console.warn(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.warn(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'underline':
                        if (!del) {
                            console.warn(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.warn(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'strikethrough':
                        if (!del) {
                            console.warn(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.warn(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;
                }

                break;

            case 'error':
                switch (format.toLowerCase()) {
                    case 'none':
                        if (!del) {
                            console.error(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.error(chalk.hex(color)(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'bold':
                        if (!del) {
                            console.error(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.error(chalk.hex(color).bold(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'underline':
                        if (!del) {
                            console.error(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.error(chalk.hex(color).underline(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;

                    case 'strikethrough':
                        if (!del) {
                            console.error(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`));
                        } else {
                            console.clear();
                            console.error(chalk.hex(color).strikethrough(`[${this.name}] (${this.date}): ${msg}`)); 
                        };

                        break;
                }

                break;
        }
    }
}

/* 
send
console.send('<color>', 'text')

output
[Logger | Type | ] message...
 */