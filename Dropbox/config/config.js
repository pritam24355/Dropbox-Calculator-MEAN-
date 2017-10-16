var path = require('path');

module.exports = {
	port: 3001,
	uploadDir: path.join(process.cwd(), 'uploads'),
	homeDir: path.join(process.cwd(), 'home'),
	cookieOpts: {
        cookieName: 'csession',
        secret: 'arnoldschwarznegger',
		duration: 24 * 60 * 60 * 1000
	}
}