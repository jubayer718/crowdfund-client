import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div >
      <nav>
        {/* nav */}
        <Navbar></Navbar>
      </nav>
      <div className='w-11/12 mx-auto'>
        
      <main>

        <Outlet></Outlet>

      </main>
</div>


      <footer className='w-11/12 mx-auto'> 
<Footer></Footer>

      </footer>
    </div>
  );
};

export default MainLayout;