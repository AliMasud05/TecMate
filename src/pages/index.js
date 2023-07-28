import { Button } from "antd";
import React, { useState } from "react";
import RootLayout from "@/components/Layout/RootLayout";
import HomeSlider from "@/components/ui/Slider";
import ProductCard from "@/components/ui/ProductCard";

const HomePage = ({ allProducts }) => {
  return (
    <div className="max-w-7xl mx-auto ">
      <HomeSlider />

      <div className="mt-10">
        <h2 className="text-center text-lg font-semibold mb-3">
          Featured Products
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products?featured=true");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
