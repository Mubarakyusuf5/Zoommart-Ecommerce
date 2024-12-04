import React, { useState } from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

export const SingleProductPage = () => {
  // State for selected color and size
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedSize, setSelectedSize] = useState('M');

  // Available colors and sizes
  const colors = ['Red', 'Blue', 'Green', 'Black'];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-10 text-gray-800">
        <div className="flex flex-col justify-evenly lg:flex-row gap-6 w-full">
          {/* Main Product Section */}
          <div className="bg-white w-full lg:w-[80%] flex flex-col lg:flex-row gap-4 p-4 rounded shadow-md">
            {/* Images Container */}
            <div className="w-full lg:w-[40%] flex gap-3 flex-col sm:flex-row-reverse sm:justify-end lg:flex-col lg:justify-start">
              <div className="h-[230px] w-full bg-teal-900 sm:w-[300px] lg:w-full rounded overflow-hidden">
                <img 
                  src="https://placehold.co/230x200" 
                  alt="Main Product" 
                  className="block w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="flex justify-center gap-2 sm:flex-col sm:justify-start lg:flex-row lg:justify-center">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-[50px] h-[50px] bg-slate-500 rounded overflow-hidden">
                    <img 
                      src="https://placehold.co/50x50" 
                      alt={`Thumbnail ${index + 1}`} 
                      className="block w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <div className="pb-2 border-b">
                <p className="text-xl sm:text-2xl font-semibold leading-6">
                  Product Name details coming from product card
                </p>
                <p className="mt-2 text-sm">
                  Brand: <Link to="/" className="text-teal-600 hover:underline">HP</Link>
                </p>
              </div>

              {/* Pricing and Rating */}
              <div className="py-4 border-b">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-xl sm:text-2xl text-black">N5,000.00</h3>
                  <p className="line-through text-gray-400 text-sm">N10,000.00</p>
                  <p className="p-0.5 bg-blue-500 bg-opacity-20 text-blue-600 rounded text-xs">
                    -45%
                  </p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(4)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                  <span className="text-gray-600 text-xs">(4 reviews)</span>
                </div>
              </div>

              {/* Variation Section */}
              <div className="py-4 border-b">
                {/* Color Selection */}
                <h4 className=" font-semibold mb-2">Select Color:</h4>
                <div className="flex gap-2 mb-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        selectedColor === color ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>

                {/* Size Selection */}
                <h4 className=" font-semibold mb-2">Select Size:</h4>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-1.5 py-0.5 text-sm border rounded ${
                        selectedSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart and Wishlist Buttons */}
              <div className="flex gap-3 items-center justify-start mt-8">
                <button className="p-2 transition duration-300 bg-blue-600 hover:bg-blue-700 text-white rounded w-[330px]">
                  <FontAwesomeIcon icon={faCartPlus} size="lg" /> 
                  <span className="ml-3">Add To Cart</span>
                </button>
                <button className="py-2 px-3 transition duration-300 bg-blue-100 hover:bg-blue-200 hover:text-red-600 rounded-full" title="Add to wishlist">
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            {/* Delivery and Return Section */}
            <div className="bg-white rounded shadow-md">
              <div className="py-3 px-4 border-b">
                <h3 className="text-lg font-bold">Delivery And Return</h3>
              </div>
              <div className="py-3 px-4 text-sm">
                <p>Information about delivery and return policies goes here.</p>
              </div>
            </div>

            {/* Placeholder for Additional Info */}
            <div className="bg-white h-[300px] rounded shadow-md">
              <div className="flex items-center justify-center h-full text-gray-500">
                Additional Information
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
