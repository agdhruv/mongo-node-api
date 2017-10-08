// const MongoClient = require('mongodb').MongoClient; // client connects to the Mongo Server
const {MongoClient, ObjectID} = require('mongodb'); // using object destructuring feature in ES6 - similar to code above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) { // check if error argument exists
		return console.log('Unable to connect to MongoDB server'); // return so that the rest of the function doesn't run
	}

	console.log('Connected to MongoDB server');

	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log("Unable to fetch todos", err);
	});


	// db.close();
});