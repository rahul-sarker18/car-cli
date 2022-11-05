import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <div style={{minHeight:'100vh'}}>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;