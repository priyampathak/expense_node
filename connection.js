const mongoose = require('mongoose');

async function connectToDatabase(){
    try{
        const uri = process.env.MONGODB_URI;
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;

        await mongoose.connect(`mongodb+srv://${username}:${password}${uri}`, { useNewUrlParser: true,
        useUnifiedTopology: true });
        console.log("Mongo Db connection success")
    } catch(error){
        console.error("Mongo connection failed", error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;