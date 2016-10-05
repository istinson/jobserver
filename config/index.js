const configVars = require('./configVars');

module.exports = {
	getDbConnectionString: function() {
		return `mongodb://${configVars.user}:${configVars.pass}@ds019756.mlab.com:19756/jobwatcher`;
	}
};

