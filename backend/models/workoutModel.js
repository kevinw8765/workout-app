const mongoose = require('mongoose')

const Schema = mongoose.Schema 
// what does a workout document look like?
// defines the structure
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// auto creates Workouts collection for us
module.exports = mongoose.model('Workout', workoutSchema)
 