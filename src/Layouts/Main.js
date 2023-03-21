import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navber/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import GoToTop from '../Pages/Shared/GoToTop/GoToTop';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <GoToTop></GoToTop>
            <Footer></Footer>
        </div>
    );
};

export default Main;