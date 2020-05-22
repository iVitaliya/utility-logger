// Packages...
const stream = require('stream').Writable;
const util = require('util');
const fs = require('fs');

const writeStream = (output, data, encoding) => {
	const stream = fs.createWriteStream(output, encoding);

	stream.write(JSON.stringify(data));
}

module.exports = writeStream;