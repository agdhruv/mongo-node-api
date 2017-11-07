var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', { // mongoose.model returns a constructor function that we use below to make instances of the model
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {
	Todo
};