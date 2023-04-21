const mongoose = require('mongoose');
require("dotenv").config();
mongoose.set("strictQuery", false);

// const DATABASE = process.env.DATABASE
const DATABASE = 'mongodb+srv://ayushcodez:ayushcodez6390@cluster0.lbuyfsu.mongodb.net/test'

console.log(DATABASE)

const connectToMongo = ()=>{
    mongoose.connect(DATABASE, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;
