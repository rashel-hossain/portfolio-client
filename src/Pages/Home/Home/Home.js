import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HireMe from '../HireMe/HireMe';
import MySkills from '../MySkills/MySkills';
import ProjectAll from '../Projects/ProjectAll';
import TestimonialAll from '../Testimonial/TestimonialAll';


const Home = () => {
    return (
        <div  >
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <ProjectAll></ProjectAll>
            <TestimonialAll></TestimonialAll>
            <HireMe></HireMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;