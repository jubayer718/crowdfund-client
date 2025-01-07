import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='relative'>
      <nav>
        {/* nav */}
        <Navbar></Navbar>
      </nav>
      <div className='w-11/12 mx-auto pt-10'>
        
      <main>

        <Outlet></Outlet>

      </main>
</div>


      <footer className=''> 
<Footer></Footer>

      </footer>
    </div>
  );
};

export default MainLayout;