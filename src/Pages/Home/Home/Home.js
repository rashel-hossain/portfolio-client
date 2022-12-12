import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ProjectAll from '../Projects/ProjectAll';
import TestimonialAll from '../Testimonial/TestimonialAll';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ProjectAll></ProjectAll>
            <TestimonialAll></TestimonialAll>
            <Contact></Contact>
        </div>
    );
};

export default Home;