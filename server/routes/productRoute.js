const express = require("express");
const { createProduct, displayProduct, displayProductById, updateProduct, deleteProduct } = require("../controllers/productController");
const { createCategory, displayCategory, displayCategoryById, updateCategory, deleteCategory} = require("../controllers/categoryController")
const router = express.Router();

router.post("/createProduct", createProduct)
router.get("/displayProduct", displayProduct)
router.get("/displayProductById", displayProductById)
router.put("/updateProduct", updateProduct)
router.delete("/deleteProduct", deleteProduct)

router.post("/createCategory", createCategory)
router.get("/displayCategory", displayCategory)
router.get("/displayCategoryById", displayCategoryById)
router.put("/updateCategory", updateCategory)
router.delete("/deleteCategory", deleteCategory)


module.exports = router