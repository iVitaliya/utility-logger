// Packages...
const moment = require("moment");

module.exports = class BaseLogger extends console {

  /**
   * @param {!Object} [data={}] - Options for the Logger instance...
   */
	constructor(data = {}) {
		super(data);

		this.name = data.name ? data.name : 'Logger';
		this.color = data.color ? data.color : '#fcfcfc';
		this.format = data.format ? data.format : 'ddddd, hh:mm A';
		this.date = data.date ? moment(data.date).format(data.format) : moment(Date.now()).format(data.format);
    }
    
    data() {
        return this.data;
    }
}

/* new Console({ 
	name: "Logger",
	color: "color code",
	date: Date.now()
}).send(); */