// const MongoClient = require('mongodb').MongoClient; // client connects to the Mongo Server
const {MongoClient, ObjectID} = require('mongodb'); // using object destructuring feature in ES6 - similar to code above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) { // check if error argument exists
		return console.log('Unable to connect to MongoDB server'); // return so that the rest of the function doesn't run
	}

	console.log('Connected to MongoDB server');

	// findOneAndUpdate

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("59f103cf0aabcbdc695c2153")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("59dba088a105da433026bda9")
	}, {
		$set: {
			name: 'Dhruv'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});