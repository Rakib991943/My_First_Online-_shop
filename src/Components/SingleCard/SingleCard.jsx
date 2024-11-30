import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCard = () => {
  const data = useLoaderData();

  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState({});
  useEffect(() => {
    const exist = data.find(p => p.product_id == id);
    setProduct(exist);
  }, [data, id]);
  console.log(product);
  return (
    <div>
      <h1>Single Card Details </h1>
    </div>
  );
};

export default SingleCard;