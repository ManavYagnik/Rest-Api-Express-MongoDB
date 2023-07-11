const mongoose = require('mongoose');

const productsdataSchema = new mongoose.Schema({

id:Number,
name:String,
color:String,
price:Number, 
category:String,
brand:String,
photo:String

})

module.exports = mongoose.model('products', productsdataSchema)