const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1';

const connectToMongo = () => {
    mongoose.connect(mongoURI,{
        }, () => {
        console.log("Connected to Mongo Database!!!"); 
    })
}

module.exports = connectToMongo;