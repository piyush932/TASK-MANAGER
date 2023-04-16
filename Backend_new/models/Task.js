const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must have a name'],
        maxlength:[20,'name cannot have more tha 20 characters'],
        trim:true
    },
    completed:{
        type:Boolean,
        deafult:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)