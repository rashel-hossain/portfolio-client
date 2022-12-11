import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ProjectAll from '../Projects/ProjectAll';
import TestimonialAll from '../Testimonial/TestimonialAll';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProjectAll></ProjectAll>
            <TestimonialAll></TestimonialAll>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;