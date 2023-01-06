import React from 'react';


const AboutMe = () => {
    return (
        <section id='about'>
            <h2 className='text-3xl text-center font-bold mt-20 mb-10'>ABOUT ME</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/T2m2SXD/rasell.png" className="max-w-sm rounded shadow-2xl" alt='' />
                    {/* https://i.ibb.co/vqtmPq4/vgaed.jpg */}
                    <div>
                        <h1 className="text-5xl font-bold">Hello,,, <br /> <span className='text-red-500'>I'm Rashel Hossain</span></h1>
                        <p className="py-6">
                            A software developer who is passionate about making professional websites. <br /> I have a passion
                            for learning and sharing my knowledge with others as publicly as possible. <br /> I love to solve
                            real-world problems. Most of the time I work with MERN Stack development in <br /> JavaScript,
                            React.js, Node.js, Express.js, MongoDB and Firebase authentication system, and JSON <br /> Web Token for
                            authorization. and Design Patterns HTML5, CSS3, Bootstrap and Tailwind CSS.
                        </p>

                        <button className="btn bg-gradient-to-r from-sky-700 to-indigo-500 text-white">Hire Me...</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;