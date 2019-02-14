var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});



/*var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo')
});*/
/*
var newTodo = new Todo({
    text: 'Kill your darlings',
    completed: false,
    completedAt: 555
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo')
});*/


// User model

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    }
});

var newUser = new User({
    email: 'sdeferme@quant.be',
});

newUser.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo')
});