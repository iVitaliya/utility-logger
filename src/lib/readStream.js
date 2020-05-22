// Packages...
const stream = require('stream').Readable;
const util = require('util');
const fs = require('fs');


const readStream = (data, encoding) => {
	const stream = fs.createReadStream(data, encoding);

	stream.on('data', function(chunk) {
		console.log(`New chunk recieved:\n${chunk}`);
	})
}

module.exports = readStream;