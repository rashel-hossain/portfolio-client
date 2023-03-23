import React from 'react';
import "./CircleSkills.css"

import developerMern from '../../../assets/bannerImg/developer-mern.png'
import html from './../../../assets/skillsIcons/htm.png'
import cssicon from './../../../assets/skillsIcons/cssicon.jpg'
import jsbg from './../../../assets/skillsIcons/jsbg.png'
import reactbg from './../../../assets/skillsIcons/reactbg.png'
import nodeJs from './../../../assets/skillsIcons/nodeJs.png'
import mongodb from './../../../assets/skillsIcons/mongodb.png'
import firebase from './../../../assets/skillsIcons/firebase.png'

const CircleSkills = () => {
    return (
        <div className="banner-circle mb-12 mt-12 lg:mt-0 lg:mb-0 lg:ml-64">
            <div className="skills relative">
                <div className="w-56 absolute developerMern">
                    <img className="" src={developerMern} alt="skill photos"></img>
                </div>
                <div className="skill-circle">
                    <div className="icon">
                        <img src={html} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={cssicon} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={jsbg} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={reactbg} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={nodeJs} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={mongodb} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={firebase} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={reactbg} alt="icon" />
                    </div>
                    <div className="icon">
                        <img src={nodeJs} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleSkills;