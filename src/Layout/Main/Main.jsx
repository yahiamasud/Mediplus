import React from 'react';
import NavbarPage from '../../SharePage/NavbarPage/NavbarPage';
import Footer from '../../SharePage/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div >
           <NavbarPage></NavbarPage>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;