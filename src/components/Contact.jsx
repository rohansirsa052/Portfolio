import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Cleaning the form data
        const username = form.name.trim();
        const user_email = form.email.trim();
        const user_message = form.message.trim();

        if (username === '' || user_email === '' || user_message === '') {
            setLoading(false);
            toast.error("Please fill all the fields.", {
                position: 'bottom-right',
            });
            return;
        }
        
        // Simulate a successful submission
        setTimeout(() => {
            setLoading(false);
            toast.success("Message sent successfully!", {
                position: 'bottom-right',
            });
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 2000);
    };

    return (
        <div className='relative z-0 bg-black w-screen mt-12'>   
            <div className='text-white contact overflow-x-hidden pt-12 mt-8' id='contact'>
                <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
                    <p className='font-light'>REACH OUT TO ME</p>
                    <h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-8'
                    >
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Ex: abc@gmail.com"
                                className='py-4 px-6 rounded-lg font-medium bg-gray-900'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Do you have anything to say?'
                                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                                required
                            />
                        </label>
                        <button
                            type='submit'
                            className='px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
