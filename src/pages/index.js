import FeaturedCategory from "@/components/ui/FeaturedCategory";
import ProductCard from "@/components/ui/ProductCard";
import HomeSlider from "@/components/ui/Slider";

const HomePage = ({ allProducts }) => {
  return (
    <div className="max-w-7xl mx-auto pb-10 min-h-screen">
      <HomeSlider />
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-1 mt-5">
          Come today. Don’t delay.
        </h2>
        <p className="text-center mb-3">Harvest the best deals this fall.</p>
        <FeaturedCategory />
      </div>

      <div className="mt-10">
        <h2 className="text-center text-2xl font-semibold mb-1">
          Popular{" "}
          <span className="text-red-500 font-bold px-3">Featured</span>{" "}
          Products
        </h2>
        <p className="text-center mb-1">A fresh approach to shopping.</p>
        <p className="text-center mb-3">Discover something new.</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://professor-pc.vercel.app/products?featured=true"
  );
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
