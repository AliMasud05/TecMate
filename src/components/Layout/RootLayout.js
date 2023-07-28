import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/logo.png";
import Image from "next/image";
const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: <Link href="/cpu">Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/ram">Ram</Link>,
    },
    {
      key: "4",
      label: <Link href="/psu">Power Supply</Link>,
    },
    {
      key: "5",
      label: <Link href="/storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="/others">Others</Link>,
    },
  ];
  const router = useRouter();

  return (
    <Layout className="layout">
      <Header className="bg-white/60 sticky top-0 backdrop-blur-lg z-20 flex items-center justify-between container">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              className="w-24 sm:w-32 rounded-md h-full cursor-pointer"
              alt="logo"
            />
          </Link>
          <Dropdown
            className="ml-5"
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <span className="cursor-pointer font-medium text-slate-600">
              Category
            </span>
          </Dropdown>
        </div>
        <div>
          <button
            onClick={() => router.push("/pc-build")}
            className="border-0 bg-purple-800 text-white py-1.5 sm:py-2 px-4 text-xs font-semibold rounded-full cursor-pointer hover:bg-purple-900 transition-all duration-200"
          >
            PC Builder
          </button>
        </div>
      </Header>
      <Content className="container mx-auto">
        <div className="site-layout-content min-h-screen">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
