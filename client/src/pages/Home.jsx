import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Card } from "../components/cards/Card";
import { Footer } from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { CategoryCard } from "../components/cards/CategoryCard";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="py-8 px-4 sm:px-6 lg:px-10 min-h-screen bg-gray-100">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center mb-6">
          <div className="w-full lg:w-[900px] bg-white h-[250px] md:h-[350px] lg:h-[450px]">
            {/* Example Image Placeholder */}
            {/* <img src="./banner.jpg" alt="banner" className="object-cover w-full h-full" /> */}
          </div>
          <div className="flex flex-row gap-6 w-full lg:flex-col lg:w-[300px]">
            <div className="bg-white h-[150px] md:h-[215px] w-full flex items-center justify-center">
              {/* Placeholder Content */}
              Image 1
            </div>
            <div className="bg-white h-[150px] md:h-[215px] w-full flex items-center justify-center">
              {/* Placeholder Content */}
              Image 2
            </div>
          </div>
        </div>

        {/* Featured Product Section */}
        <div className="bg-white mb-6 rounded">
          <div className="flex justify-between items-baseline py-3 px-4 text-gray-800 border-b border-gray-300">
            <h2 className="font-bold text-xl md:text-2xl">Featured Products</h2>
            <Link to="/" className="underline text-xs md:text-sm transition duration-300">
              See more
            </Link>
          </div>
          <div className="p-4">
            <Card />
          </div>
        </div>

        {/* Top Sales Section */}
        <div className="bg-white mb-6 rounded">
          <div className="flex justify-between items-baseline py-3 px-4 border-b border-gray-300 text-gray-800">
            <h2 className="font-bold text-xl md:text-2xl">Top Sales</h2>
            <Link to="/" className="underline text-xs md:text-sm transition duration-300">
              See more
            </Link>
          </div>
          <div className="p-4">
            <Card />
          </div>
        </div>

        {/* Shop by Category Section */}
        <div className="bg-white py-3 px-4 mb-6 rounded">
          <h2 className="font-bold text-xl md:text-2xl mb-6 text-center text-gray-800">
            Shop By Category
          </h2>
          <div className="overflow-auto w-full px-2 sm:px-4 py-3 no-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="p-4 bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              to="/products"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded px-4 py-2 transition duration-300"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
