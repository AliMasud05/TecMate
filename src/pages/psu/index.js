import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PsuPage = () => {
  return <div>this is psu image</div>;
};

export default PsuPage;
PsuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
