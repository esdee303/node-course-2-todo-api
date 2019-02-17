var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


// Using the OR doesn't work, we have to select mongoose.connect to the local database or to the cloud database

// mongoose.connect('mongodb://localhost:27017/TodoApp')


 mongoose.connect(`mongodb://esdee303:bdog2015@cluster0-shard-00-00-ftq1f.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true` || 'mongodb://127.0.0.1:27017/TodoApp'
  ,{ useNewUrlParser: true, }, function(error){
        if(error) {
            return console.log(error);
        }
        console.log('Connected !');
        
});



module.exports = { mongoose };