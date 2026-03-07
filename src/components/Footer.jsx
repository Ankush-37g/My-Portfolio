import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Ankush-37g", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ankush-sharma-7bb5382ba/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className={`w-full py-12 px-6 md:px-12 border-t transition-colors duration-300 ${
      darkMode 
        ? "bg-[#05070a] text-white border-gray-800" 
        : "bg-[#f8f9fa] text-gray-900 border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className={`text-2xl font-bold tracking-tight ${
            darkMode ? "text-white" : "text-orange-600"
          }`}>
            Portfolio
          </h2>
          <p className={`text-sm mt-1 font-medium ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            Full Stack Developer 
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                darkMode 
                  ? "bg-white text-black hover:bg-gray-200" 
                  : "bg-[#333c4d] text-white hover:bg-orange-500"
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className={`text-sm font-medium flex items-center gap-1 ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}>
          <span>@ {currentYear} Made with</span>
          <Heart size={14} className="text-red-500 fill-red-500 mx-0.5" />
          <span>by</span>
          <span className={`hover:underline cursor-pointer ml-1 ${
            darkMode ? "text-orange-500" : "text-orange-600"
          }`}>
            Ankush Sharma
          </span>
        </div>

      </div>
    </footer>
  ); 
};

export default Footer;