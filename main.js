// Files...
const logger = require('./src/structures/Logger.js');
const data = require('./data/sourceData.json');
const readStream = require('./src/lib/readStream.js');
const writeStream = require('./src/lib/writeStream.js');

const rStream = readStream('./data/sourceData.json', 'utf8');