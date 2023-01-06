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
        <div>
            <h2 className='text-2xl font-bold text-center'>MY PROFESSIONAL SKILLS</h2>
            <div className='flex justify-center p-6 items-center'>
                <div>
                    <img className='w-20 m-2' src={html} alt=''/>
                </div>
                <div>
                    <img className='w-20 m-2' src={cssicon} alt=''/>
                </div>
                <div>
                    <img className='w-20 m-2' src={Javascript} alt=''/>
                </div>
                <div>
                    <img className='w-20 m-2' src={react} alt=''/>
                </div>
                <div>
                    <img className='w-20 m-2' src={firebase} alt=''/>
                </div>
                <div>
                    <img className='w-20 m-2' src={nodeJs} alt=''/>
                </div>
                <div>
                    <img className='w-20 m-2' src={mongodb} alt=''/>
                </div>s
            </div>
        </div>
    );
};

export default MySkills;