import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(product);

  return <div>this is dynamic page and id is {id}</div>;
};

export default ProductDetailPage;
ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};






export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/products`);
  const products = await res.json();







  const paths = products.map((product) => ({
    params: {
      id: product._id,
    },
  }));

console.log(paths, 27);
  return { paths: [], fallBack: false };
};











export const getStaticProps = async (context) => {
  const { id } = context.params
  console.log(context, 56);
  const res = await fetch(`http://localhost:5000/products/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
};
