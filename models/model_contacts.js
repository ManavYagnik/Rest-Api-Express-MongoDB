const mongoose = require('mongoose');

const contactsdataSchema = new mongoose.Schema({
firstname:String,
lastname:String,
email:String, 
city:String,
subject:String,
})

module.exports = mongoose.model('contacts', contactsdataSchema)