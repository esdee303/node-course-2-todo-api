var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose

mongoose.connect(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}${process.env.MONGOURI}` || 'mongodb://localhost:27017/TodoApp',{
    useNewUrlParser: true, 
    }, function(error){
        console.log(error);
    });

module.exports = { mongoose };