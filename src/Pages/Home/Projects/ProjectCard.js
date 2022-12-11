import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, projectName, projectDate, img, description } = project;

    return (
        <div className="px-4 py-5">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>

                <div className="card-body">
                    <h2 className="card-title">
                        {projectName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white">
                        Date: {projectDate}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description.slice(0, 100) + '...'} <span className='text-red-400'><Link to={`/projectdetails/${id}`}>Read More</Link></span>
                    </p>
                    <div className="card-actions justify-center ">
                        <Link to={`/projectdetails/${id}`} className='w-full'><button className="btn btn-wide justify-center items-center w-full" >Explore Project</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectCard;