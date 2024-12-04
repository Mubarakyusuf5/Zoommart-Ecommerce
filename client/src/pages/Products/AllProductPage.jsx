import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/cards/Card";
import { Filter } from "../../components/Filter/Filter";

export const AllProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-6 px-10 bg-gray-100">
        <div className=" flex relative">
          <Filter />
          <div
            // style={{ width: "calc(100% - 250px)" }}
            className=" grid bg-white min-w-[300px] py-5 px-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 "
          >
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
