const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
	_id: String,
	title: String,
	loc: String,
	link: String,
	show: Boolean,
	complete: Boolean
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;