import React from 'react';
import profile from '../../../assets/bannerImg/profile.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-purple-600 ">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={profile} className="w-1/3 rounded-full shadow-2xl" alt='' />
                    <div>
                        <h2 className='text-6xl font-bold text-white'>
                            Hello,  <br /> I'm Rashel Hoosain
                        </h2>
                        <p className='text-xl text-black'>There are many variations of available, We provide <br /> The best service have setisfied products in our customer.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2">Get Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;