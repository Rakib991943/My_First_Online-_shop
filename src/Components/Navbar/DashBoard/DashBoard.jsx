import { useEffect, useState } from "react";
import { getToCard } from "../../Utilitis/Utilitis";
import DashBoardCard from "../../DashboardCard/DashBoardCard";


const DashBoard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const card = getToCard();
    setProduct(card);
  }, [])

  console.log(product);
  return (
    <div className="h-full">
      <h1 className="text-center font-bold text-3xl mt-3 mb-3">WellCome TO DashBoatd {product.length} </h1>
      <div className="grid grid-cols-1 md:grid-co">
        {
          product.map(p => <DashBoardCard key={p.product_id} p={p}></DashBoardCard>)
        }
      </div>
    </div>
  );
};

export default DashBoard;




