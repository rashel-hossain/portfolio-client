import React from 'react';
import './Banner.css'
import TypeWriterEffect from 'react-typewriter-effect';
import facebook from '../../../assets/socialIcons/facebook.png'
import linkedin from '../../../assets/socialIcons/linkedin.png'
import github from '../../../assets/socialIcons/github.png'
import { FaCloudDownloadAlt } from "react-icons/fa";
import CircleSkills from '../../Shared/CircleSkills/CircleSkills';


const Banner = () => {
    return (
        <section className='overflow-hidden'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    {/* <img src={developerMern} className="md:w-3/12 object-cover rounded-md" alt='' /> */}
                    <CircleSkills></CircleSkills>
                    <div>
                        <div>
                            <h1 className="font-mono text-6xl font-bold text-white">Hello I'm...<br />
                                <span>
                                    {/* I'm Rashel Hossain */}
                                    <TypeWriterEffect
                                        textStyle={{
                                            fontFamily: 'mono',
                                            color: '#64ffda',
                                            fontWeight: 700,
                                            fontSize: '64px',
                                        }}
                                        startDelay={2000}
                                        cursorColor="#3F3D56"
                                        multiText={[
                                            "Software Engineer",
                                            "Fornt-End Developer",
                                            "MERN Stack Developer"
                                        ]}
                                        multiTextDelay={1500}
                                        typeSpeed={30}
                                        multiTextLoop
                                    />
                                </span>
                            </h1>
                            <p className=' text-orange-50 mt-6'>
                                I’m a software developer who is passionate about making professional websites.
                                <br />I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems.
                            </p>
                            <button className="btn-primary w-fit bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full  mt-10 flex items-center gap-2">
                                <a href="https://drive.google.com/file/d/1pcAFJNzyYdX8SRHTRtK2bfSemnt2pfjJ/view?usp=sharing">Download Resume</a><FaCloudDownloadAlt />
                            </button>
                        </div>

                        <div className='social flex mt-4'>
                            <div>
                                <a href='https://www.facebook.com/rashelhossain44/'>
                                    <img className='w-10 m-2' src={facebook} alt='' />
                                </a>
                            </div>
                            <div>
                                <a href='https://www.linkedin.com/in/rashelhossain44/'>
                                    <img className='w-10 m-2 rounded-full' src={linkedin} alt='' />
                                </a>
                            </div>
                            <div>
                                <a href='https://github.com/rasel497/'>
                                    <img className='w-10 m-2 rounded-full' src={github} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;