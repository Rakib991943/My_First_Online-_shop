import { useLoaderData, useParams } from "react-router-dom";
import CategoriesProduct from "../CategoriesProduct/CategoriesProduct";
import { useEffect, useState } from "react";

const Products = () => {
  const { category } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(p => p.category === category);
      setProduct(filterByCategory);
    } else {
      setProduct(data);
    }
  }, [data, category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      {
        product.map(categorys => <CategoriesProduct key={categorys.category_id} categorys={categorys}></CategoriesProduct>)
      }
    </div>
  );
};

export default Products;