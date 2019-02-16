var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp');

 /* mongoose.connect('process.env.MONGODB_URI', function() { /* dummy function */ })
    .then(() => {
        console.log('ok');
    })
    .catch(err => { // mongoose connection error will be handled here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });*/

    mongoose.connect(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0-shard-00-00-ftq1f.mongodb.net:27017,cluster0-shard-00-01-ftq1f.mongodb.net:27017,cluster0-shard-00-02-ftq1f.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`,{
useNewUrlParser: true, 
}, function(error){console.log(error)});

module.exports = { mongoose };