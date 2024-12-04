const {Category} = require("../models/categoryModel")


const createCategory = async (req, res)=>{
    try {
        const { name } = req.body;
        const exist = await Category.findOne({ name });
    
        if (exist) {
          return res.status(409).json({ message: "Category already exists" });
        } else {
          // Create a new Category
          const newCategory = await Category.create(req.body);
          res.status(201).json({ message: "Category created successfully", newCategory });
        }
    } catch (error) {
        res.status(500).json({ message: "Error creating Category", error });
    }
}
const displayCategory = async (req, res)=>{
    try {
        const Category = await Category.find()
        res.status(200).json(Category);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Category", error });
    }
}
const displayCategoryById = async (req, res)=>{
    try {
        const Category = await Category.findById(req.params.id)
        res.status(200).json(Category);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Category", error });
    }
}
const updateCategory = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}
const deleteCategory = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    createCategory,
    displayCategory,
    displayCategoryById,
    updateCategory,
    deleteCategory
}