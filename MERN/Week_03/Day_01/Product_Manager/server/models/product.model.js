// Importing External Libraries (Mongoose)
const mongoose = require('mongoose'); 

// Creating Schema for Model (blueprint)
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }  
}, { timestamps: true });

// Creating collection by Schema
const ProductModel = mongoose.model("Product", ProductSchema);

// Exporting Model
module.exports = ProductModel;