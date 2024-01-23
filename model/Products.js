
const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type : String, 
        required: true}, //name cannot be empty

    price: { 
        type : Number,
        required: true},

    description: { 
        type : String,
        required: false},

    path: { 
        type : String,
        required: false}
});
const Products = mongoose.model('Products', productSchema, 'products');

module.exports = Products;