import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <nav>
        {/* nav */}
        <Navbar></Navbar>
      </nav>

      <main>

        <Outlet></Outlet>

      </main>


      <footer>
<Footer></Footer>

      </footer>
    </div>
  );
};

export default MainLayout;