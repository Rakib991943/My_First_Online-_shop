
import { NavLink } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import Banner from './Banner/Banner';
const Navbar = () => {
  return (
    <div className=''>
      <div className=' bg-purple-500 p-5 h-[600px] mb-4 rounded-xl'>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-15 md:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>

                <div className='mt-1 '>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-42 p-2  shadow">
                    <li className='mb-3 text-white '><NavLink to='/'>Home</NavLink></li>
                    <li className='mb-3 text-white'><NavLink to='/setisfied' >Satisfied</NavLink></li>
                    <li className='mb-3 text-white'><NavLink >DashBoard</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='hidden text-3xl font-bold md:block'>Gadget Heaven </div>
          </div>
          <div className="navbar-center hidden md:block ">

            <div className='flex gap-5'>
              <NavLink to='/' className='text-2xl text-white'>Home</NavLink>
              <NavLink to='/setisfied' className='text-2xl text-white'>Satisfied</NavLink>
              <NavLink className='text-2xl text-white'>DashBoard</NavLink>
            </div>

          </div>
          {/* Imogii   */}
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <GrCart className='text-2xl'></GrCart>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaRegHeart className='text-2xl' />

              </div>
            </button>
          </div>


        </div>
        <div>
          <div className='md:w-[650px] mx-auto'>
            <h1 className='text-center md:text-4xl text-xl mt-6 text-white font-bold mb-3'>Upgrade Your Teach Accessorize With Gradeget Heaven  Accessories </h1>
          </div>
          <div className='md:w-[720px] mx-auto'>
            <p className='text-white text-xl text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="mt-5 mb-7 text-center text-red-500">
              <button className="btn bg-gray-50 text-xl text-red-500 mx-auto">Shop Now </button>
            </div>
          </div>
        </div>

        <div className=' relative'>
          <Banner></Banner>
        </div>
      </div>
    </div>

  );
};

export default Navbar;