import React from 'react';
import Hireme from "../../../assets/aboutme/helloimg.png"

const HireMe = () => {
    return (
        <section id="hireme" className="py-10 px-3 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Hire <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
            </div>
            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Do you want any work from me?
                    </h2>
                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                        A software developer who is passionate about making professional websites.
                        I have a passion for learning and sharing my knowledge with others as publicly as possible.
                        I love to solve real-world problems.
                        Most of the time I work with MERN Stack development in JavaScript, React.js, Node.js, Express.js, MongoDB and Firebase authentication system, and JSON Web Token for authorization.
                        And Design Patterns HTML5, CSS3, Bootstrap and Tailwind CSS.
                    </p>
                    <button className="btn-primary mt-10">Say Hello</button>
                </div>
                <img
                    src={Hireme}
                    alt=""
                    className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                />
            </div>
        </section>
    );
};

export default HireMe;