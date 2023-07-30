
import React, { useState } from "react";
import HomeSlider from "@/components/ui/Slider";
import ProductCard from "@/components/ui/ProductCard";
import FeaturedCategory from "@/components/ui/FeaturedCategory";

const HomePage = ({ allProducts }) => {
  return (
    <div className="max-w-7xl mx-auto pb-10 min-h-screen">
      <HomeSlider />

      <div className="mt-10">
        <h2 className="text-center text-2xl font-semibold mb-1">
          Featured Products
        </h2>
        <p className="text-center mb-3">Check & Get Your Desired Product!</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-1 mt-5">
          Featured Category
        </h2>
        <p className="text-center mb-3">
          Get Your Desired Product from Featured Category!
        </p>
        <FeaturedCategory />
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-hi41.onrender.com/products?featured=true"
  );
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
