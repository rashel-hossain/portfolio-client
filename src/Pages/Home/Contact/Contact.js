import React from 'react';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { IoMdSend, IoLogoWhatsapp, IoMdMail, IoMdLocate } from 'react-icons/io';


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm('service_35jgedh', 'template_hqaewko', e.target, 'ZIrCbNO-wt-1eykJI');
        toast.success("Successfully send");
        form.reset();
    }

    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
                <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
                    <form onSubmit={sendEmail} className="flex flex-col flex-1 gap-5 rounded-lg">
                        <input type="text" name='email_form' placeholder="Your Name" className='bg-gray-700 outline-none rounded-lg p-3' required/>
                        <input type="Email" name='subject' placeholder="Your Email Address" className='bg-gray-700 outline-none rounded-lg p-3' required/>
                        <textarea name='message' placeholder="Your Message" rows={10} className='bg-gray-700 outline-none rounded-lg p-3' required></textarea>
                        <button className="btn-primary w-fit bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2">Send Message <IoMdSend ></IoMdSend></button>
                    </form>
                    <div className="flex flex-col  gap-6 ">
                        <div
                            className="flex flex-row text-left gap-4 flex-wrap items-center">
                            <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                <span><IoMdMail></IoMdMail></span>
                            </div>
                            <p className="md:text-base text-sm  break-words">rasel.csediu44@gmail.com</p>
                        </div>
                        <div
                            className="flex flex-row text-left gap-4 flex-wrap items-center">
                            <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                <span><IoLogoWhatsapp></IoLogoWhatsapp></span>
                            </div>
                            <p className="md:text-base text-sm  break-words">+88 01722354001</p>
                        </div>
                        <div
                            className="flex flex-row text-left gap-4 flex-wrap items-center">
                            <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                <span><IoMdLocate></IoMdLocate> </span>
                            </div>
                            <p className="md:text-base text-sm  break-words">Banglamotor, Dhaka-1000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

