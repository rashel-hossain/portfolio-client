import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ProjectAll from '../Projects/ProjectAll';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProjectAll></ProjectAll>
            <Contact></Contact>
        </div>
    );
};

export default Home;