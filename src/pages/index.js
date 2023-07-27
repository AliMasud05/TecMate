import { Button } from "antd";
import React, { useState } from "react";
import { DownloadOutlined } from '@ant-design/icons';
import RootLayout from "@/components/Layout/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-white bg-red-500 font-bold">This is home page</h1>
      <p>this is home page</p>

      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
      >
        Download
      </Button>
    </div>
  );
};

export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
