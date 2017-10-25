// const MongoClient = require('mongodb').MongoClient; // client connects to the Mongo Server
const {MongoClient, ObjectID} = require('mongodb'); // using object destructuring feature in ES6 - similar to code above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) { // check if error argument exists
		return console.log('Unable to connect to MongoDB server'); // return so that the rest of the function doesn't run
	}

	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Dhruv'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("59d7e59ff41b9a3bc09cb62c")
	}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log(err);
	});

	// db.close();
});