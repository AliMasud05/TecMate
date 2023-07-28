import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const OthersPage = () => {
  return <div>this is others page</div>;
};

export default OthersPage;
OthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
