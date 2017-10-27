var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // tell mongoose which promise library to use - built-in one in this case
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// var otherTodo = new Todo({
// 	text: 'Something to do'
// });

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log('Unable to save', e);
// });


var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

var newUser = new User({
	email: 'x@y.com    '
});

newUser.save().then((doc) => {
	console.log('User saved', doc)
}, (e) => {
	console.log('Unable to save user', e);
});