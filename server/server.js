var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
       type: String 
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
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

var newTodo = new Todo({
    text: 'Wack the dog',
    completed: true,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo')
});
