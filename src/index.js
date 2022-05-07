const express = require('express');
const app = express();



/**
 * 
 * 
 * 
 */

// Middleware
app.use(express.json());

// set image folder open on the web
//app.use(express.static(__dirname + '/assets/images'));

/**
 * 
 * 
 * 
 */

// API routes
require('./routes')(app);

/**
 * 
 * 
 * 
 */

// DOC routes
app.use('/doc/v1', require('./routes/doc'));

/**
 * 
 * 
 * 
 */

app.listen(3000, () => console.log('Listening on port 3000'));

/*db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});*/

/**
 * 
 * 
 * 
 */

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
