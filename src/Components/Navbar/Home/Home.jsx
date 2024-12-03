import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";
// import AllProducts from "../../AllProducts/AllProducts";
// import Products from "../../Products/Products";

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className="text-center
        text-2xl md:text-4xl font-bold mt-7 mb-8"> Explore Cutting Edge <span className="text-red-500">BY</span> <span className="text-green-500">20%</span>  </h1>
        <div className="flex">
          <button className="btn bg-gray-50 text-red-600 text-2xl mx-auto font-bold">Shop Now </button>
        </div>
      </div>
      <div className="flex gap-x-5 ">
        <div>
          <button className="btn mt-3 ml-3 mb-3 btn-warning" onClick={() => navigate('/AllProducts')}>All Products </button>

          <div className="card bg-base-100  shadow-xl mb-2">
            <div className="tabs h-[450px] w-[150px]  tabs-lifted flex flex-col items-center ">
              {
                data.map(c => <NavLink to={`/category/${c.category}`} role="tab" className={({ isActive }) => `tab  font-bold mb-4  bg-gray-200 w-32 h-20 text-xl ${isActive ? 'tab-active ' : " "}`} key={c.category}>{c.category}</NavLink>)
              }
            </div>
          </div>
        </div>
        <Outlet></Outlet>

      </div>
    </>
  );
};

export default Home;