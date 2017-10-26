var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // tell mongoose which promise library to use - built-in one in this case
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', { // mongoose.model returns a constructor function that we use below to make instances of the model
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo')
// });

var otherTodo = new Todo({
	text: 'Feed the dog',
	completed: true,
	completedAt: 'hi123'
});

otherTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	console.log('Unable to save', e);
});