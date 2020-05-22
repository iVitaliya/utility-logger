// Packages...
const stream = require('stream').Writable;
const util = require('util');


var writeStream = () => {
	stream.call(this, { objectMode: true });
}

/*
 * Implementing the write function in writeble stream class.
 * This is the function which will be used when other stream is * piped into this writeable stream.
*/

stream.prototype._write = function(chunk, encoding, callback) {
	console.log(`Write:			${JSON.stringify(chunck)}`);
	callback();
}

module.exports = writeStream;