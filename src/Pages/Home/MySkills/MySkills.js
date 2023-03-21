import React from 'react';
import html from '../../../assets/skillsIcons/htm.png'
import cssicon from '../../../assets/skillsIcons/cssicon.jpg'
import Javascript from '../../../assets/skillsIcons/jsbg.png'
import react from '../../../assets/skillsIcons/reactbg.png'
import firebase from '../../../assets/skillsIcons/firebase.png'
import nodeJs from '../../../assets/skillsIcons/nodeJs.png'
import mongodb from '../../../assets/skillsIcons/mongodb.png'

const MySkills = () => {
    return (
        <section id="skills">
            <div className='text-white mt-12'>
                <h3 className="text-4xl text-center font-semibold">
                    Professional <span className="text-cyan-600">Skills</span>
                </h3>
                <div className='flex justify-center p-6 items-center mt-10'>
                    <div>
                        <img className='w-20 m-2' src={html} alt='' />
                    </div>
                    <div>
                        <img className='w-20 m-2' src={cssicon} alt='' />
                    </div>
                    <div>
                        <img className='w-20 m-2' src={Javascript} alt='' />
                    </div>
                    <div>
                        <img className='w-20 m-2' src={react} alt='' />
                    </div>
                    <div>
                        <img className='w-20 m-2' src={nodeJs} alt='' />
                    </div>
                    <div>
                        <img className='w-20 m-2' src={mongodb} alt='' />
                    </div>
                    <div>
                        <img className='w-20 m-2' src={firebase} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;