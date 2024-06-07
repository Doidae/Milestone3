require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();


//connect to MongoDB


//Middleware
app.use(bodyParser.json());
app.use(cors());


//Routes???
