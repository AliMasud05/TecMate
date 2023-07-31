import SelectProductCard from "@/components/ui/SelectProductCard";

const SelectMotherboardPage = ({ motherboard }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="mt-5">
        <h2 className="text-center text-lg font-semibold mb-3">Processor</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {motherboard?.map((product) => (
            <SelectProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectMotherboardPage;

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://localhost:5000/products?category=motherboard"
  );
  const data = await res.json();
  return {
    props: {
      motherboard: data,
    },
  };
};
