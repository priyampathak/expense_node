const express = require('express');
const bodyParser = require('body-parser')
const connectToDatabase = require('./connection')
const usersRoutes = require('./routes/usersRoutes')
const cardsRoutes = require('./routes/cardsRoutes')

const app = express();

app.use(bodyParser.json());

require('dotenv').config({path: '.env.local'})

connectToDatabase();

app.use('/api/users', usersRoutes);
app.use('/api/cards', cardsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server Running")
});