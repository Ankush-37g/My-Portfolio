import avatar from '../assets/avatar.png';
import { ChevronRight } from 'lucide-react';
const About = ({darkMode}) => {

    const stats = [
    { label: 'Projects Completed', value: '4+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Coding Practice', value: '300+' },
    ];

    return (
        <section id="about">
            <div className={`container min-h-screen mx-auto flex justify-center p-6 sm:p-0 font-sans ${darkMode ? 'bg-black/50' : 'bg-white'}`}>

                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">

                    {/* Left side: image} */}
                    <div className="flex justify-center lg:justify-start" 
                        data-aos='fade-right' 
                        data-aos-delay='400'>

                        <img src={avatar} alt="Avatar" className="w-[285px] sm:w-[337px] md:w-[450px] lg:w-[675px] " />
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-3/5 space-y-6" data-aos='fade-left' data-aos-delay='200'>
        
                        <h1 className= {`text-4xl sm:text-3xl md:text-6xl text-center font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            About <span className="text-orange-500">Me</span>
                        </h1>
                        
                        <div className={`p-6 rounded-[2rem] mb-8 shadow-sm border relative ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                              I’m a Computer Science student passionate about building modern web applications and solving real-world problems through code. I enjoy working with technologies like React, Node.js, and MongoDB to create full-stack projects. Alongside development, I actively practice data structures and algorithms to strengthen my problem-solving skills and write efficient, scalable solutions. I’m always eager to learn new technologies and take on challenging projects that allow me to grow as a developer.
                            </p>
                        </div>
                        

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-3  gap-6 md:gap-9">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                            <span className="text-xl md:text-4xl font-bold text-orange-400">
                                {stat.value}
                            </span>
                            <span className={`font-medium text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                                {stat.label}
                            </span>
                            </div>
                        ))}
                        </div>

                        {/* Action Button */}
                        <button className={`group relative px-6 py-2 border-2 border-orange-400 rounded-full font-bold text-base hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-200 flex items-center gap-2 ${darkMode ? 'bg-slate-900/50 text-white' : 'bg-white'}`}>
                        Learn More
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
         

    )
}

export default About;