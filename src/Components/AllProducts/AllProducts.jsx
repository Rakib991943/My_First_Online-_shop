import { Link, useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct";
import { useState } from "react";

const AllProducts = () => {
  const data = useLoaderData();
  const [allProducts, setProduct] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...allProducts].sort((a, b) => b.price - a.price);
      setProduct(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...allProducts].sort((a, b) => b.rating - a.rating);
      setProduct(sorted);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-bold mt-7 mb-8">
          Explore Cutting Edge <span className="text-red-500">BY</span>{" "}
          <span className="text-green-500">20%</span>
        </h1>
        <div className="flex">
          <button className="btn bg-gray-50 text-red-600 text-2xl mx-auto font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="text-end mr-7 mt-6 md:mr-28">
        <button
          onClick={() => handleSort("rating")}
          className="btn btn-outline btn-secondary mr-3"
        >
          <Link>Sort By Rating</Link>
        </button>
        <button
          onClick={() => handleSort("price")}
          className="btn btn-outline btn-secondary"
        >
          <Link>Sort By Price</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-11 mt-7">
        {allProducts.map((p) => (
          <AllProduct key={p.product_id} p={p}></AllProduct>
        ))}
      </div>

      <div>
        <button className="btn mb-5 px-8 bg-pink-300 font-bold text-2xl">
          Back
        </button>
      </div>
    </>
  );
};

export default AllProducts;
