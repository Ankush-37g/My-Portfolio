
import contactImg from '../assets/contactImg.png';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // Initialize EmailJS (replace with your public key)
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE');
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error for this field when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        }
    };

    const handleFormData = async (e) => {
        e.preventDefault();
        
        //validate form
        const newErrors = {};
        if (!formData.firstname.trim()) newErrors.firstname = 'First name is required';
        if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            setStatusMessage('');
            
            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID ,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ,
                    {
                        from_name: `${formData.firstname} ${formData.lastname}`,
                        from_email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL
                    }
                );

                if (response.status === 200) {
                    setStatusMessage('✓ Message sent successfully! I\'ll get back to you soon.');
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                    // Clear success message after 5 seconds
                    setTimeout(() => setStatusMessage(''), 5000);
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setStatusMessage('✗ Failed to send message. Please try again.');
                // Clear error message after 5 seconds
                setTimeout(() => setStatusMessage(''), 5000);
            } finally {
                setLoading(false);
            }
        }
    }

    //create form
    return (
        <section id="contact" className='py-8 sm:py-14 overflow-hidden'>

            <div className="container mx-auto px-5 sm:py-14 font-sans">

                <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="200">
                     <h1 className= {`text-4xl sm:text-3xl md:text-6xl font-semibold title-font mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Get In
                        <span className="text-orange-500"> Touch</span>
                    </h1>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-md`}>
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
                     onSubmit={handleFormData}
                     noValidate>
                    
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                           
                             {/* First Name */}
                            <input className={`border rounded w-full py-2 px-3 sm:px-4 focus:border-orange-500 focus:ring-2  text-lg sm:text-xl focus:ring-orange-500/20 ${errors.firstname ? 'border-red-500' : ''}`}  
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
                            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                                {/* Last Name */}

                            <input className={`border rounded w-full py-2 px-3 sm:px-4 text-lg sm:text-xl   focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 ${errors.lastname ? 'border-red-500' : ''}`}  
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
                            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
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
                        {errors.email && <p className="text-red-500 text-sm mt-1 -mt-3 mb-3">{errors.email}</p>}
                        
                        
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
                        {errors.message && <p className="text-red-500 text-sm mt-1 -mt-3 mb-3">{errors.message}</p>}

                        {/* Status Message */}
                        {statusMessage && (
                            <div className={`p-3 mb-4 rounded text-center text-sm sm:text-base font-medium ${
                                statusMessage.startsWith('✓') 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}>
                                {statusMessage}
                            </div>
                        )}
  
                        {/* Button */}
                    
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                background: loading ? '#666' : 'linear-gradient(to right, #f97316, #f59e0b)',
                                opacity: loading ? 0.7 : 1
                            }}
                            className="w-full font-semibold py-2 sm:py-3 px-4 rounded-lg text-lg sm:text-xl focus:outline-none focus:shadow-outline hover-shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all disabled:hover:scale-100 disabled:cursor-not-allowed"
                            
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                       
                    </form>
               
                </div>
            </div>
        </section>
    );
}

export default Contact;