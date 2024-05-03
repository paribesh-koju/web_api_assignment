const mongoose = require('mongoose')

//Making schema
const appointSchema = new mongoose.Schema({
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
})

const Appoint = mongoose.model('appoints', appointSchema)
module.exports = Appoint;