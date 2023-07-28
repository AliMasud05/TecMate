import Image from "next/image";
import { useRouter } from "next/router";
const ProductCard = ({ product }) => {
  const { _id, name, category, price, image, status } = product || {};

  let newCategory = null;
  if (category === "cpu") {
    newCategory = "Processor";
  }
  if (category === "motherboard") {
    newCategory = "Motherboard";
  }
  if (category === "ram") {
    newCategory = "Ram";
  }
  if (category === "psu") {
    newCategory = "Power Supply";
  }
  if (category === "storage") {
    newCategory = "Storage";
  }
  if (category === "monitor") {
    newCategory = "Monitor";
  }
  if (category === "others") {
    newCategory = "Others";
  }

  let newStatus = null;
  if (status === "inStock") {
    newStatus = "In Stock";
  }
  if (status === "outOfStock") {
    newStatus = "Out Of Stock";
  }
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`products/${_id}`)}
      className="max-w-[270px] w-full mx-auto border border-gray-300 bg-white rounded-md shadow-md cursor-pointer flex flex-col gap-2 justify-between"
    >
      <div className="h-[240px] relative">
        <Image
          fill={true}
          className="object-cover rounded-md"
          src={image}
          alt=""
        />
      </div>
        <div className="px-2">
          <h1 className="font-semibold mt-1 mb-2">{name}</h1>
        </div>

        <div className="p-2">
          <div className="flex justify-between">
            <span className="">{newCategory}</span>
            <span
              className={`${
                product.status === "inStock" ? "text-green-700" : "text-red-600"
              } font-semibold`}
            >
              {newStatus}
            </span>
          </div>
          <div className="flex justify-between mt-3">
            <span className="">{product.rating}</span>
            <span className="font-semibold text-red-500">
              {product.price} <span className="">/-</span>
            </span>
          </div>
        </div>

    </div>
  );
};

export default ProductCard;
