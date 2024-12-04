const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: true },
  brand: {type: String},
  images: [String],  

  variations: [
    {
      color: { type: String },
      size: { type: String },
      price: { type: Number, required: true },
      stock: { type: Number, required: true },
      images: [String],
      sku: { type: String, unique: true },
    }
  ],

  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User',
    //  default: "zoomart official" 
    },
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
},
{
    timestamps: true
}
);



const Product = mongoose.model("Product", productSchema)

module.exports = Product