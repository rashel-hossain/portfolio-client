import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { img } = testimonial;
    return (
        <div className="px-4 py-5 bg-green-400 rounded">
            <div className="card">
                <img src={img} alt="" />
            </div>
        </div >
    );
};

export default TestimonialCard;