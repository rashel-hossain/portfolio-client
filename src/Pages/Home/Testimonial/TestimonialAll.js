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
        <section id="testimonial" className='mt-16'>
            <div className='max-w-[1150px] mx-auto'>
                <div className="text-center text-white">
                    <h3 className="text-4xl font-semibold">
                        My <span className="text-cyan-600">Testimonial</span>
                    </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
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