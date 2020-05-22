// Packages...
const fs = require('fs');
const stream = require('stream').Writable;

// Files...
const logger = require('./src/structures/Logger.js');
const data = require('./data/sourceData.json');

/*
 * Implementing the wrtie function in writeble stream class.
 * This is the function which will be used when other stream is * piped into this writeable stream.
*/

stream.prototype._write = function(chunk, data) {
	console.log(data);
}

const customStream = new stream();

fs.createReadStream('./data/sourceData.json').pipe(process.stdout);