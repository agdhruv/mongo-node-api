// const MongoClient = require('mongodb').MongoClient; // client connects to the Mongo Server
const {MongoClient, ObjectID} = require('mongodb'); // using object destructuring feature in ES6 - similar to code above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) { // check if error argument exists
		return console.log('Unable to connect to MongoDB server'); // return so that the rest of the function doesn't run
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	comepleted: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2)); // result.ops contains the documents that were added
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Dhruv',
	// 	age: 19,
	// 	location: 'Delhi'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});