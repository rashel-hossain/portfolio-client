import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const ProjectAll = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                console.log('alll dataaa', data);
                setProjects(data);
            })
    }, [])


    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-16'>MY PROJECTS</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    projects?.length > 0 &&
                    projects.map(project => <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    projects?.length > 0 &&
                    projects.map(project => <ProjectDetails
                        key={project._id}
                        project={project}
                    ></ProjectDetails>)
                }
            </div>
        </div>
    );
};

export default ProjectAll;