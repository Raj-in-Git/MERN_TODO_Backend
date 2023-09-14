
//Model Todo.js is a file which defines the structur of the data we store in database//

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const TodoSchema = new schema({
    text:{
        type:String,
        required: true
    },
    completed:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;