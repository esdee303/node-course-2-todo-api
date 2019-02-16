var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/TodoApp')


/*
mongoose.connect(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0-shard-00-00-ftq1f.mongodb.net:27017,cluster0-shard-00-01-ftq1f.mongodb.net:27017,cluster0-shard-00-02-ftq1f.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true` || 'mongodb://127.0.0.1:27017/TodoApp').then(() => {
    useNewUrlParser: true;
    console.log("Connected to database");
}).catch((err) => {
    console.log('Not connected to database', err);
});*/


 mongoose.connect(`mongodb://esdee303:bdog2015@cluster0-shard-00-00-ftq1f.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true` || 'mongodb://127.0.0.1:27017/TodoApp'
  ,{ useNewUrlParser: true, }, function(error){
        console.log(error);
});



module.exports = { mongoose };