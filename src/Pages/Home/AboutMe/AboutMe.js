import React from 'react';
import aboutImg from '../../../assets/aboutme/aboutImg.jpg'
import './About.css'

const AboutMe = () => {

    const info = [
        { text: "Years experience", count: "06m" },
        { text: "Completed Projects", count: "16" },
        { text: "Companies Work", count: "06" },
    ];

    return (
        <section id="about" className="py-12 px-4 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                A software developer who is passionate about making professional websites.
                                I have a passion for learning and sharing my knowledge with others as publicly as possible.
                                I love to solve real-world problems. Most of the time I work with MERN Stack development in
                                JavaScript, React.js, Node.js, Express.js, MongoDB and Firebase authentication system, and JSON
                                Web Token for authorization. And Design Patterns HTML5, CSS3, Bootstrap and Tailwind CSS.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <div className="card-actions justify-start">
                                <button type="button" class=" btn-primary mt-10">Hire Me...</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;