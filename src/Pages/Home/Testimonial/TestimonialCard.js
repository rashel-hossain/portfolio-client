import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { img } = testimonial;
    return (
        <div className="px-4 py-5 bg-blue-900 rounded">
            <div className="card">
                <img src={img} className="w-full h-80" alt="" />
            </div>
        </div >
    );
};

export default TestimonialCard;