const http = require('http');

// require Node's built-in Modules
const os = require('os');

// require logger Module
const logger = require('logger').createLogger('log.txt');

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// Get user info from OS
let user = os.userInfo();
console.log(user);

// include routes
const leagues = require('./routes/leagues');
const teams = require('./routes/teams');

var app = express();

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials');
// set view engine
app.set('view engine', 'hbs');

// partials
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/leagues', leagues);
app.use('/teams', teams);
app.get('/index', (request, response) => {
    response.render('index.hbs');
});

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) => {
    response.status(404).redirect('/404.html');
});
// Handle 500 response
app.use((request, response, next) => {
    response.status(500).redirect('/error.html');
});

const port = 3000;
const server = http.createServer(app).listen(port);

server.on('listening', () => {
    console.log(`Server Listening on ${server.address().port}`);
});

// Write to log
logger.info(`App accessed by: ${user.username}!\n`);