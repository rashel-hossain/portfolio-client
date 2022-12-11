import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                console.log('projects details', data);
            })
    }, [])

    return (
        <div>
            {/* <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Project Details
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            {projects.projectName}
                        </h2>
                        <p className="text-base font-bold text-red-500 text-gray-700 md:text-lg">
                            Duration: {projects.projectDate}
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            {projects.description}
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <button className="btn btn-active btn-primary">Hire Me</button>
                    </div>
                </div>
                <div className="relative lg:w-1/2">

                    <figure><img src={projects.img} alt='' /></figure>

                </div>
            </div> */}

        </div>
    );
};

export default ProjectDetails;