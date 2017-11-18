var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // tell mongoose which promise library to use - built-in one in this case
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};