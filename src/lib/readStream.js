// Packages...
const stream = require('stream').Readable;
const util = require('util');
const fs = require('fs');

const readStream = (data, encoding) => {
	const rStream = fs.createReadStream(data, encoding);

	rStream.on('data', function(chunk) {
		console.log(`New chunk recieved:\n${chunk}`);
	})
}

module.exports = readStream;