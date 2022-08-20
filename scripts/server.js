// Import builtin NodeJS modules to instantiate the service
const https = require('https');
const fs = require('fs');
const path = require('path');

// Import the express module
const express = require('express');
const port = 3000;

// Instantiate an Express application
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../out')));

// place holder for the data
const users = [];
app.get('/api/users', (req, res) => {
	console.log('api/users called!');
	res.json(users);
});

app.post('/api/user', (req, res) => {
	const user = req.body.user;
	console.log('Adding user:::::', user);
	users.push(user);
	res.json('user addedd');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../out/index.html'));
});
// Create a NodeJS HTTPS listener on port 3000 that points to the Express app
// Use a callback function to tell when the server is created.
https
	.createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
		{
			key: fs.readFileSync('./certs/devcert.key'),
			cert: fs.readFileSync('./certs/devcert.cert'),
		},
		app
	)
	.listen(port, '0.0.0.0', () => {
		console.log('serever is runing at port 3000');
	});
