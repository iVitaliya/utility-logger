// Packages...
const stream = require('stream').Readable;
const util = require('util');


var readStream = (data) => {
	stream.call(this, { objectMode: true });

	this.data = data;
	this.curIndex = 0;
}

util.inherits(readStream, stream);

stream.prototype._read = function() {
	if (this.curIndex === this.data.length) {
    	return this.push(null);
  	}

	var data = this.data[this.curIndex];
	console.log(`Read:			${JSON.stringify(data)}`);
	this.push(data);
}

module.exports = readStream;