const mongoose = require("mongoose");
require('dotenv').config();
const URL = process.env.MONGOOSE_URL;

mongoose.connect(URL);

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