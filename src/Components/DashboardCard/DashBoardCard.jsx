
import { TiDelete } from "react-icons/ti";
import { removeCard } from "../Utilitis/Utilitis";
const DashBoardCard = ({ p }) => {
  const HandleRemove = (id) => {
    console.log(id);
    removeCard(id.product_id);
  }


  const { product_title, product_image, price, description, specification, rating } = p || {};
  return (
    <div >


      <div className="card card-compact bg-base-100  shadow-xl p-5 mb-5 mt-6">
        <div className="md:flex  gap-4 w-[400px] md:w-[1000px] h-[420px] md:h-[220px] p-4  ">
          {/* Image */}
          <div className='w-[300px] h-[170px]'>
            <img className='w-full h-full rounded-xl' src={product_image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1">
            <h1 className="font-bold text-3xl mt-2">{product_title}</h1>
            <p className="text-xl font-bold mt-3">Price : ${price}</p>
            <p className="mt-3 ">{description}</p>
            <h1 className="font-bold md:text-2xl text-xl mt-5">Specipication : {specification}</h1>



          </div>
          <div onClick={() => HandleRemove(p)} className="items-center ml-32 text-4xl  flex"><TiDelete className=" text-red-600" /></div>
        </div>
      </div>

    </div>
  );
};

export default DashBoardCard;




