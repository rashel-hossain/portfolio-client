import React from 'react';
import profile from '../../../assets/bannerImg/profile.jpg'
import Resume from '../../../assets/resume/Rashel Hossain-Resume2.pdf'
import './Banner.css'
import TypeWriterEffect from 'react-typewriter-effect';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-purple-600">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={profile} className="w-1/3 rounded-full ring ring-white-500 ring-offset-base-100 ring-offset-4 shadow-2xl outline-transparent" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-black">HELLO I'M...<br />
                            <span className='text-white'>
                                {/* I'm Rashel Hossain */}
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Red Hat Display',
                                        color: '#FFFF',
                                        fontWeight: 700,
                                        fontSize: '1.5em',
                                    }}
                                    startDelay={2000}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        "Software Engineer",
                                        "Fornt-End Developer",
                                        "MERN Developer"
                                    ]}
                                    multiTextDelay={1500}
                                    typeSpeed={30}
                                    multiTextLoop
                                />
                            </span>
                        </h1>
                        <p className='text-xl text-black'>
                            I’m a software developer who is passionate about making professional websites.
                            <br />I have a passion for learning and sharing my knowledge with others as publicly as possible.
                            <br />I love to solve real-world problems.
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2">
                            <a href="https://drive.google.com/file/d/1pcAFJNzyYdX8SRHTRtK2bfSemnt2pfjJ/view?usp=sharing">Download Resume</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;