import RootLayout from "@/components/Layout/RootLayout";

const RamPage = () => {
  return <div>this is ram page</div>;
};

export default RamPage;
RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
