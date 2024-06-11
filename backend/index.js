require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('./models/userSchema')

const SECRETKEY = process.env.KEY

const app = express();


//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is now connected to port ${process.env.PORT} and MongoDB`)
        })
    })
    .catch((error) =>{
        console.log('Error connecting to MongoDB:', error)
    })

//Middleware
app.use(bodyParser.json());
app.use(cors());



//Routes???

//POST
app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        //Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({email, username, password: hashedPassword })
        await newUser.save()
        res.status(201).json({message: 'New user created successfully'})
    } catch (error) {
        res.status(500).json({error: 'Error signing up'})
    }
})

//GET
app.get('/register', async (req,res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch(error) {
        res.status(500).json({error: 'Could not get Users'})
    }
})

//GET THE LOGIN

app.post('/login', async (req, res) => {
    try {
        const {username, password } = req.body
        const user = await User.findOne({username})
        if (!user) {
            return res.status(401).json({error: 'Invalid Login'})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return res.status(401).json({error: 'Invalid Login'})
        }
        const token = jwt.sign({userId: user._id }, SECRETKEY, {expiresIn: '2hr'})
        res.json({message: 'Successful Login'})
    } catch (error) {
        res.status(500).json({error: 'Login Error'})
    }
})