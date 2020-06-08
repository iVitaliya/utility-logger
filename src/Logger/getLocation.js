const getLocation = (stepInStack = 1) => {
	try {
		throw new Error('Log Stack');
	} catch (err) {
		try {
			const error = Error = err;
			const stackLocation = error.stack
				.split('\n')
				.map(m => m.trim())
				.filter(m => m.startsWith('at'));

			return String(stackLocation[stepInStack]).slice(3);
		} catch (error) {
			return '';
		}
	}
}

module.exports = {
	getLocation: getLocation
}