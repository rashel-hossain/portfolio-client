import React from 'react';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { IoMdSend } from 'react-icons/io';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm('service_35jgedh', 'template_hqaewko', e.target, 'ZIrCbNO-wt-1eykJI');
        toast.success("Successfully send");
        form.reset();
    }


    return (
        <section className='mt-16'>
            <h1 className="text-3xl text-center font-bold mb-5 mt-10">CONTACT ME AS A DEVELOPER</h1>
            <form onSubmit={sendEmail}>
                <div className="hero min-h-screen bg-purple-400">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center font-bold mt-2">GET IN TOUCH </h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label htmlFor='emailForm' className="label">Email</label>
                                <input type="email" name='email_form' id='email_form' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label htmlFor='subject' className="label">Subject</label>
                                <input type="text" name='subject' placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label htmlFor='message' className="label">Message</label>
                                <textarea name="message" id='message' rows="4" className="input input-bordered" placeholder='Your Message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message<IoMdSend className='text-center ml-2 text-lg' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </section>

    );
};

export default Contact;

