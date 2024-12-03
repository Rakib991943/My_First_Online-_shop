import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { addToCard, getToCard } from "../Utilitis/Utilitis";

const SingleCard = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const exist = data.find(p => p.product_id == product_id);
    setProduct(exist);
  }, [data, product_id]);
  const { product_title, product_image, price, description, specification, rating } = product || {};
  const handleToCard = (product) => {
    addToCard(product);
    // getToCard(product);
  }

  return (

    <div className="flex justify-center mb-7 mt-7">
      <div className="card card-compact bg-base-100  shadow-xl p-5 ">
        <div className="md:flex  gap-4 w-[400px] md:w-[1000px] h-[980px] md:h-[500px] p-10  ">
          {/* Image */}
          <div className="flex-1 w-[340px] h:[300px] md:h-[420px] md:w-[400px]">
            <img className="w-full rounded-xl h-full " src={product_image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1">
            <h1 className="font-bold text-3xl mt-2">{product_title}</h1>
            <p className="text-xl font-bold mt-3">Price : ${price}</p>
            <button className="btn btn-outline btn-accent font-bold text-xl mt-3">In Stock</button>
            <p className="mt-3 ">{description}</p>
            <h1 className="font-bold md:text-2xl text-xl mt-5">Specipication : {specification}</h1>
            <p className="text-pink-400 font-bold mt-3">Rating: </p>
            <div className="flex mt-3">
              <div>
                <div className="rating mr-5 mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
              <div className="font-bold">
                <button className="btn font-bold rounded-xl">{rating}</button>
              </div>
            </div>
            <div className="flex">
              <div><button onClick={() => handleToCard(product)} className="btn btn-active btn-primary mt-3">Add To Card </button>
              </div>
              <div className="text-3xl mt-5 ml-7">
                <FaRegHeart />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>


  );
};

export default SingleCard;