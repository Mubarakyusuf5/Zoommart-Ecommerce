import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Card = () => {
  const handleAction =()=>{
    console.log("mubarak ibrahim")
  }
  return (
    <div className='relative'>
    <Link to="/category/product" className="block">
      <div className="w-[150px] sm:w-[170px] md:w-[210px] lg:w-[230px] lg:hover:shadow-md shadow-md rounded transition-transform transform ">
        {/* Image Container */}
        <div className="w-full rounded relative">
          <img 
            src="https://placehold.co/230x200" 
            alt="Product" 
            title="Product name game ahead" 
            className="w-full h-auto object-cover"
          />
          <p className="text-blue-600 text-xs sm:text-sm absolute top-2 right-2 p-0.5 bg-blue-500 bg-opacity-20 rounded">
            -45%
          </p>
          
        </div>

        {/* Content Container */}
        <div className="p-2 sm:p-3 bg-white text-gray-800">
          <p className="font-semibold text-xs sm:text-sm lg:text-base truncate">
            Product name game ahead of time
          </p>
          <div className="flex sm:gap-4 md:flex-row md:items-baseline flex-col items-start mt-1 sm:mt-2 mb-1">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">
              15,000.00
            </h3>
            <p className="line-through text-gray-400 text-xs sm:text-sm">
              13,000.00
            </p>
          </div>
          <p className="text-xs sm:text-sm">⭐ (1 review)</p>
        </div>
      </div>
    </Link>
    <FontAwesomeIcon 
            icon={faHeart} 
            className="absolute top-40 left-2 p-1.5 bg-white border-2 border-blue-100 bg-opacity-50 hover:border-blue-400 text-sm sm:text-lg transition duration-300 hover:text-red-400 cursor-pointer rounded-full" 
            title="Add to wishlist" 
            onClick={handleAction}
          />
    </div>
  );
};
