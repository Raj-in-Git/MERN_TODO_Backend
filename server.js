const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("process.env.mongodb_url")
    .then(()=>console.log("DB is connected"))
    .catch(console.error);

const Todo = require("./models/Todo.js");

app.get("/todos", async (req,res)=>{
    const todos = await Todo.find();
    res.json(todos);
    // console.log(todos)
})


app.post("/todo/new", async (req,res)=>{
    const Newtodo = await new Todo({
        text:req.body.text
    });
    Newtodo.save();
    res.json(Newtodo);

})

app.delete("/todo/delete/:id",async(req,res)=>{
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
})

app.put("/todo/update/:id",async(req,res)=>{
    const change = await Todo.findById(req.params.id);
    change.completed = !change.completed;
    change.save();
    res.json(change);
})

app.listen(3001,()=>console.log("App Started @ Port 3001"));
