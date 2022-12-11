import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { img } = testimonial;
    return (
        <div className="px-4 py-5">
            <div className="card bg-base-100 shadow-xl">
                <img src={img} alt="" />
            </div>
        </div >
    );
};

export default TestimonialCard;