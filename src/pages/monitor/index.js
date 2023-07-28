import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const MonitorPage = () => {
  return <div>this is monitor page</div>;
};

export default MonitorPage;
MonitorPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };