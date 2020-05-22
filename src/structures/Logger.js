// Packages...
const moment = require("moment");
const { Console } = require("console");

module.exports = class BaseLogger extends Console {

  /**
   * @param {Object} [data={}] - Options for the Logger instance...
   */
	constructor(data = {}) {
		super(data);

		this.name = data.name ? data.name : 'Logger';
		this.format = data.format ? data.format : 'dddd, hh:mm A';
		this.date = data.date ? moment(data.date).format(data.format) : moment(Date.now()).format(data.format);
    }
    
    /**
     * @param {string} type - Type to fetch: name, color, format, date.
     */
    data(type) {
        switch (type.toLowerCase()) {
			case 'name':
                this.name;
                break;
			case 'format':
				this.format;
				break;
			case 'date':
				this.date;
				break;
		}
    }
}

/* new Console({ 
	name: "Logger",
	color: "color code",
	date: Date.now()
}).send(); */