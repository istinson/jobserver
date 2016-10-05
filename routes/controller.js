const Jobs = require('../models/jobModel');

module.exports = function(app) {
	app.get('/api/myjobs', function (req, res) {
		Jobs.find({show: true}, function (err, jobs) {
			console.log('err, job: ', err, jobs);
			if (err) throw err;
			res.send(jobs);
		});
	});
	
	// // PUT / Update   show: false
	// app.put('/api/updatejobs', function (req, res) {
	// 	Jobs.findByIdAndUpdate();
	// })

};