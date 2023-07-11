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

productsdataSchema.index({'$**': 'text'});
module.exports = mongoose.model('products', productsdataSchema)

