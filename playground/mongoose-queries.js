const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a0cb20ba33df45b7df1cfe811';
var id = '59f3ac6e5aa1a7e97e180708';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid.');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// // });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by ID', todo);
// }, (e) => {
// 	console.log(e);
// });

User.findById(id).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('User', user);
}, (e) => {
	console.log(e);
});