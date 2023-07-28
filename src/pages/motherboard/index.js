import RootLayout from "@/components/Layout/RootLayout";


const MotherboardPage = () => {
  return <div>this is motherboard page</div>;
};

export default MotherboardPage;
MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
