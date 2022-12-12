import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialAll = () => {
    const [testimonials, setTestimonials] = useState();

    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => {
                console.log('testimonials', data);
                setTestimonials(data);
            })
    }, [])

    return (
        <section id="testimonial">
            <div className='max-w-[1150px] mx-auto'>
                <h2 className='text-3xl font-bold text-center mt-16 mb-5'>MY TESTIMONIAL ACHIVEMENT</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        testimonials?.length > 0 &&
                        testimonials.map(testimonial => <TestimonialCard
                            key={testimonial._id}
                            testimonial={testimonial}
                        ></TestimonialCard>)
                    }
                </div>
            </div>

        </section>

    );
};

export default TestimonialAll;