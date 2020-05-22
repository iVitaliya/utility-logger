const logger = require("./src/structures/Logger.js");

const Logger = new logger({
	name: 'Test Logger',
	format: 'dddd, hh:mm A',
	date: Date.now()
})

console.log(Logger);