const mongoose = require("mongoose")

const todolistSchema = {
    item:String
}

const Todolist = mongoose.model("Todolist", todolistSchema);

module.exports = Todolist;