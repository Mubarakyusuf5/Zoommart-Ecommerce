import React from 'react';

export const Filter = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-[240px] shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className='text-xl font-bold text-center'>Filter By</h1>
        <button className="text-sm text-green-500 hover:text-white hover:bg-green-500 border border-green-500 px-3 py-1 rounded-lg transition-all">
          Clear Filters
        </button>
      </div>

      <div className="space-y-4">
        {/* Categories Filter */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase text-gray-300">Categories</h3>
          <select className="w-full p-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select Category</option> 
            <option value="all">All Category</option> 
            <option value="cooking">Cooking</option>
            <option value="baking">Baking</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>

        {/* Brands Filter */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase text-gray-300">Brands</h3>
          <select className="w-full p-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select Brand</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
            <option value="brand4">Brand 4</option>
          </select>
        </div>

        {/* Star Rating Filter */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase text-gray-300">Rating</h3>
          <select className="w-full p-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map(rating => (
              <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase text-gray-300">Price</h3>
          <div className='bg-gray-700 p-3 rounded-lg'>
            <div className="flex justify-between mb-2">
              <label htmlFor="min-price" className="text-xs">Min</label>
              <label htmlFor="max-price" className="text-xs">Max</label>
            </div>
            <div className="flex space-x-2">
              <input 
                type="number" 
                id="min-price" 
                className="w-full p-2 bg-gray-600 rounded-lg text-white text-sm"
                placeholder="0"
              />
              <input 
                type="number" 
                id="max-price" 
                className="w-full p-2 bg-gray-600 rounded-lg text-white text-sm"
                placeholder="1000"
              />
            </div>
          </div>
        </div>

        {/* Stores Filter */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase text-gray-300">Stores</h3>
          <select className="w-full p-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select Store</option>
            <option value="store1">Store 1</option>
            <option value="store2">Store 2</option>
            <option value="store3">Store 3</option>
            <option value="store4">Store 4</option>
          </select>
        </div>
      </div>
    </div>
  );
};
