import { Button, Slider } from "antd";
import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import RootLayout from "@/components/Layout/RootLayout";
import HomeSlider from "@/components/ui/Slider";

const HomePage = () => {
  return (
    <div className="">
      <HomeSlider />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
