import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const StoragePage = () => {
  return <div>this is storage page</div>;
};

export default StoragePage;
StoragePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
