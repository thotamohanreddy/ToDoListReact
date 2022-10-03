const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Mohan:Moh1n#red@cluster0.wdfhcva.mongodb.net/todolistDB")

app.listen(3001, function () {
    console.log("express server is running on the port 3001");
})