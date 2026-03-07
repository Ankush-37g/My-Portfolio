import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, demoUrl, darkMode }) => {
  return (
    <div className={`rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white'}`}>
      {/* Project Image Container */}
      <div className="h-48 overflow-hidden hover:scale-105 transition-transform duration-300">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{title}</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-sm mb-4 line-clamp-2`}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-100 text-gray-600'} text-xs font-medium rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-colors text-sm">
            <Github size={18} />
            Code
          </a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#f2991a] hover:bg-[#e08a10] text-white font-semibold rounded-xl transition-colors text-sm">
            <ExternalLink size={18} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Forever",
      description: "A full-stack e-commerce web application that allows users to browse products, manage a shopping cart, and securely complete payments using Stripe.",
      tags: ["React", "Node.js","Express.js","MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
      githubUrl: "https://github.com/Ankush-37g/Forever-Ecommerce-Platform",
      demoUrl: "https://forever-frontend-pi-seven.vercel.app/"
    },
    {
      title: "Monify",
      description: "A finance management application that helps users track income and expenses, categorize transactions, and visualize spending patterns with interactive charts.",
      tags: ["React", "Node.js","Express.js","MongoDB","Chart.js",],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      githubUrl: "https://github.com/Ankush-37g/Monify",
      demoUrl: "https://monify-five.vercel.app/"
    },
    {
      title: "Multi-Agent Pathfinding Simulator",
      description: "A 2D multi-agent simulator that visualizes grid navigation using the A* pathfinding algorithm with obstacle and collision avoidance.",
      tags: ["Python", "A*", "Pygame", "Multiprocessing"],
      imageUrl: "https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/793c012801865f90d6e49dbb39008a1eb1723811/1-Figure1-1.png",
      githubUrl: "https://github.com/ElectroCubic/Multi-Agent-Pathfinding-Sim",
      demoUrl: ""
    }
  

  ];

  return (

    <section id="projects" className='py-8 sm:py-14'>
        <div className="container mx-auto min-h-screen sm:py-16 px-5 md:px-2 font-sans">
            <div className="mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            
                    <h1 className={`text-5xl sm:text-5xl md:text-7xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}
                       
                    >
                        My <span className="text-orange-500">Projects</span>
                    </h1>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-lg`}>
                        A showcase of my recent work
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="600">
                {projects.map((project, index) => (
                    <ProjectCard 
                    key={index}
                    {...project}
                    darkMode={darkMode}
                    />
                ))}
                </div>
            </div>
        </div>
    </section>
       
  );
}
export default Projects;

