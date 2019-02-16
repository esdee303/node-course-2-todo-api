var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp');

mongoose.connect('process.env.MONGODB_URI', function() { /* dummy function */ })
    .then(() => {
        return server.start();
    })
    .catch(err => { // mongoose connection error will be handled here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

module.exports = { mongoose };