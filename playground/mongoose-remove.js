const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('5a1196ac91801202aecf1d1b').then((todo) => {
	console.log(todo);
}, (e) => {
	console.log('error', e);
});

// Todo.findOneAndRemove({
// 	_id: '5a1196ac91801202aecf1d1b'
// }).then((todo) => {
// 	console.log(todo);
// });