const Products = require("../models/productModel")


const createProduct = async (req, res)=>{
    try {
        const { name } = req.body;
        const exist = await Products.findOne({ name });
    
        if (exist) {
          return res.status(409).json({ message: "Product already exists" });
        } else {
          // Create a new Product
          const newProduct = await Products.create(req.body);
          res.status(201).json({ message: "Product created successfully", newProduct });
        }
    } catch (error) {
        res.status(500).json({ message: "Error creating Product", error });
    }
}
const displayProduct = async (req, res)=>{
    try {
        const products = await Products.find().populate({path: "category"})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Products", error });
    }
}
const displayProductById = async (req, res)=>{
    try {
        const product = await Products.findById(req.params.id).populate({path: "category"})
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Product", error });
    }
}
const updateProduct = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}
const deleteProduct = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    createProduct,
    displayProduct,
    displayProductById,
    updateProduct,
    deleteProduct
}