import React from 'react';

const Contact = () => {
    return (
        <section className='mt-16'>
            <h1 className="text-3xl text-center font-bold mb-5 mt-10">CONTACT ME AS A DEVELOPER</h1>
            <div className="hero min-h-screen bg-purple-400">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold mt-2">GET IN TOUCH </h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="" id="" rows="4" className="input input-bordered" placeholder='Your Message'></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Contact;

