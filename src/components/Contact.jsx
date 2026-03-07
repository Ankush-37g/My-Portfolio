//create a contact form with name, email, message fields and a submit button. Use tailwind css for styling and make it responsive. Add validation for the fields and display error messages if the validation fails.

//import contact image from asset
import contactImg from '../assets/contactImg.png';


import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormData = () => {
        //validate form
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            //submit form
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    }

    //create form
    return (
        <section id="contact" className='py-8 sm:py-14 overflow-hidden'>

            <div className="container mx-auto px-5 sm:py-14 font-sans">

                <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="200">
                     <h1 className= {`text-5xl sm:text-4xl md:text-8xl font-semibold title-font mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Get In
                        <span className="text-orange-500"> Touch</span>
                    </h1>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-lg`}>
                        Have a question or want to work together?
                    </p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 md:gap-10" >

                    {/* // Image */}
                    <div className="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="400">
                        <img src={contactImg} alt="Contact" className="w-[380px] sm:w-[450px] md:w-[600px] lg:w-[750px]" />
                    </div>
                    {/* // Form */}
                    <form
                     style={{
                        background : darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
                        borderColor : darkMode ? '#374151' : '#e5e7eb',
                     
                     
                     }}
                     className="lg:w:3/5 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-lg border" 
                     data-aos='fade-left'
                     data-aos-delay='200'
                     onSubmit={handleFormData}>
                    
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                           
                             {/* First Name */}
                            <input className={`border rounded w-full py-2 px-3 sm:px-4 focus:border-orange-500 focus:ring-2  text-lg sm:text-xl focus:ring-orange-500/20 ${errors.name ? 'border-red-500' : ''}`}  
                                id="firstname"
                                type="text"
                                name="firstname"
                                style={{
                                    backgroundColor: darkMode ? 
                                    '#374251' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937',
                                }}
                                placeholder='First Name'
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                            />
                                {/* Last Name */}

                            <input className={`border rounded w-full py-2 px-3 sm:px-4 text-lg sm:text-xl   focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 ${errors.name ? 'border-red-500' : ''}`}  
                                id="lastname"
                                type="text"
                                name="lastname"
                                style={{
                                    backgroundColor: darkMode ? 
                                    '#374251' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937',
                                }}
                                placeholder='Last Name'
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                            

                        {/* Email */}
                        <input className={`border rounded w-full py-2 px-3 sm:px-4 text-lg sm:text-xl   focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 mb-4 sm:mb-6 ${errors.email ? 'border-red-500' : ''}`}  
                            id="email"
                            type="email"
                            name="email"
                            style={{
                                backgroundColor: darkMode ? 
                                '#374251' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937',
                            }}
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        
                        {/* Phone */}
                        <input className={`border rounded w-full py-2 px-3 sm:px-4 text-lg sm:text-xl   focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 mb-4 sm:mb-6 ${errors.phone ? 'border-red-500' : ''}`}  
                            id="phone"
                            type="text"
                            name="phone"
                            style={{
                                backgroundColor: darkMode ? 
                                '#374251' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937',
                            }}
                            placeholder='Phone'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        {/* Message */}
                        <textarea className={`border rounded w-full py-2 px-3 sm:px-4  text-lg sm:text-xl  focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 mb-4 sm:mb-6 resize-none ${errors.message ? 'border-red-500' : ''}`}  
                        rows='4'
                        placeholder='Your Message'
                        style={{
                            backgroundColor: darkMode ? 
                            '#374251' : '#faede3',
                            borderColor: darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937',
                        }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
  
                         {/* Button */}
                    
                        <button
                            type="submit"
                            style={{background: 'linear-gradient(to right, #f97316, #f59e0b)'}}
                            className="w-full font-semibold py-2 sm:py-3 px-4 rounded-lg text-lg sm:text-xl focus:outline-none focus:shadow-outline hover-shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all "
                            
                        >
                            Send Message
                        </button>
                       
                    </form>
               
                </div>
            </div>
        </section>
    );
}

export default Contact;