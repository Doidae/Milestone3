require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();


//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is now connected to port ${process.env.PORT}`)
        })
    })
    .catch((error) =>{
        console.log('Error connecting to MongoDB:', error)
    })

//Middleware
app.use(bodyParser.json());
app.use(cors());




//Routes???
