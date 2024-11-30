
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='mt-6 w-11/12 mx-auto'>
      <Navbar></Navbar>
      <div className='h-full mt-40 lg:mt-32'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

    </div>

  );
};

export default Layout;