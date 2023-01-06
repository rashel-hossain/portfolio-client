import React from 'react';
import profile from '../../../assets/bannerImg/profile.png'
import './Banner.css'
import TypeWriterEffect from 'react-typewriter-effect';
import facebook from '../../../assets/socialIcons/facebook.png'
import linkedin from '../../../assets/socialIcons/linkedin.png'
import github from '../../../assets/socialIcons/github.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-900">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={profile} className="w-1/4 rounded-md shadow-2xl outline-transparent" alt='' />
                    <div>
                        <h1 className="text-6xl font-bold text-red-500">Hello I'm,<br />
                            <span className='text-white'>
                                {/* I'm Rashel Hossain */}
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Red Hat Display',
                                        color: '#64ffda',
                                        fontWeight: 700,
                                        fontSize: '1.2em',
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
                        <p className='text-xl text-fuchsia-50'>
                            I’m a software developer who is passionate about making professional websites.
                            <br />I have a passion for learning and sharing my knowledge with others as publicly as possible.
                            <br />I love to solve real-world problems.
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-sky-700 to-indigo-500 text-white mt-2">
                            <a href="https://drive.google.com/file/d/1pcAFJNzyYdX8SRHTRtK2bfSemnt2pfjJ/view?usp=sharing" download>Download Resume</a>
                        </button>
                        <div>
                            <div className='flex justify-start items-center mt-4'>
                                <div>
                                    <a href='https://www.facebook.com'>
                                        <img className='w-12 m-2' src={facebook} alt='' />
                                    </a>
                                </div>
                                <div>
                                    <a href='https://www.linkedin.com/in/rashel-hossain/'>
                                        <img className='w-12 m-2 rounded-full' src={linkedin} alt='' />
                                    </a>
                                </div>
                                <div>
                                    <a href='https://github.com/rasel497'>
                                        <img className='w-12 m-2 rounded-full' src={github} alt='' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;