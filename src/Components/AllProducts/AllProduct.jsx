import { NavLink } from "react-router-dom";

const AllProduct = ({ p }) => {

  const { product_id, product_title, product_image, price, description, specification, rating } = p || {};
  return (
    <div>
      <div>
        <div className="">
          <div className="card bg-base-100 shadow-xl md:w-[394px] h-[550px] ">
            <div className="md:w-[394px] h-[250px] ">
              <img className="w-full h-full  p-6" src={product_image} alt="#" />
            </div>

            <div className="card-body">
              <h2 className="card-title">
                {product_title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p><span className="font-bold">About :</span> {description}</p>
              <p> <span className="font-bold">Specipiaction:</span> {specification}</p>
              <div>

                <div className="card-actions justify-between">
                  <div>
                    <p className="mt-3 md:text-xl"> <span className="font-bold">Price : </span>{`${price} $`}</p>
                  </div>
                  <div className="ml-8 mt-3 font-bold">{rating}</div>
                  <NavLink to={`/product/${product_id}`}>
                    <button className="btn btn-warning">View Details </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>
  );
};

export default AllProduct;