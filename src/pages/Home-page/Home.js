import React from 'react';
import About from './About/About';
import Baner from './Baner';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;