// Files...
const logger = require('./src/structures/Logger.js');
const data = require('./data/sourceData.json');
const readStream = require('./src/lib/readStream.js');

const rStream = readStream('./data/sourceData.json', 'utf8');
