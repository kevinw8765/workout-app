require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


const app = express() // Creates an Express App


// middleware
app.use(express.json())

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes) 
app.use('/api/user', userRoutes) 


// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests ONLY when connected  to db
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


