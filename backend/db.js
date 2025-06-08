const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:%40%40Akshat1@cluster0.dkiipmz.mongodb.net/week_5_task");

const db_schema = mongoose.Schema({
    username : String,
    description : String,
    linkedin : String,
    twitter : String,
    interests : String
})

const Card = mongoose.model('Cards', db_schema);

module.exports = {
    Card
}