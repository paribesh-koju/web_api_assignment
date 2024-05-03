const mongoose = require('mongoose')

//Making schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
})

const User = mongoose.model('users', userSchema)
module.exports = User;