const mongoose = require('mongoose');

// SubCategory Schema
const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference to the parent Category
    required: true,
  },
}, { timestamps: true });

// Category Schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, { timestamps: true });

// Export models
const Category = mongoose.model('Category', categorySchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = { Category, SubCategory };
