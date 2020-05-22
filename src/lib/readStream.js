// Packages...
const stream = require('stream').Duplex;
const util = require('util');
const fs = require('fs');

const readStream = (data, encoding) => {
	const rStream = fs.createWriteStream(data, encoding);

	rStream.on('data', function(chunk) {
		console.log(`New chunk recieved:\n${chunk}`);
	})
}

module.exports = readStream;