import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "./ProjectAll.css"

const ProjectAll = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                console.log('all data..', data);
                setProjects(data);
            })
    }, [])

    return (
        <section>
            <div id='projects' className='mt-12'>
                <div className="text-center text-white">
                    <h3 className="text-4xl font-semibold">
                        MY <span className="text-cyan-600">PROJECTS</span>
                    </h3>
                    <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
                </div>

                <div className='mx-12 mt-12'>
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {
                            projects?.length > 0 &&
                            projects.map((project, i) => (
                                <SwiperSlide key={i}>
                                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                        <img src={project.img} alt="" className="rounded-lg  w-full h-96" />
                                        <h3 className="text-xl my-4 text-white font-semibold">{project.projectName}</h3>
                                        <div className="flex gap-3">
                                            <a
                                                href={project.clientSite}
                                                target="_blank"
                                                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                                                Client Site
                                            </a>
                                            <a
                                                href={project.serverSite}
                                                target="_blank"
                                                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                                                Server Site
                                            </a>
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        projects?.length > 0 &&
                        projects.map(project => <ProjectDetails
                            key={project._id}
                            project={project}
                        ></ProjectDetails>)
                    }
                </div> */}


            </div>
        </section>
    );
};

export default ProjectAll;