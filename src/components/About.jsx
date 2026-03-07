import avatar from '../assets/avatar.png';
import { ChevronRight } from 'lucide-react';
const About = ({darkMode}) => {

    const stats = [
        { label: 'Education', value: '5+' },
        { label: 'Years Experience', value: '10+' },
        { label: 'Projects Completed', value: '100+' },
    ];

    return (
        <section id="about">
            <div className={`container min-h-screen mx-auto flex justify-center p-6 sm:p-0 font-sans ${darkMode ? 'bg-black/50' : 'bg-white'}`}>

                <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

                    {/* Left side: image} */}
                    <div className="flex justify-center lg:justify-start" 
                        data-aos='fade-right' 
                        data-aos-delay='400'>

                        <img src={avatar} alt="Avatar" className="w-[380px] sm:w-[450px] md:w-[600px] lg:w-[900px] " />
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-3/5 space-y-8" data-aos='fade-left' data-aos-delay='200'>
        
                        <h1 className= {`text-5xl sm:text-4xl md:text-8xl text-center font-semibold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            About <span className="text-orange-500">Me</span>
                        </h1>
                        
                        <div className={`p-8 rounded-[2.5rem] mb-10 shadow-sm border relative ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                            <p className={`text-lg sm:text-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                              I’m a Computer Science student passionate about building modern web applications and solving real-world problems through code. I enjoy working with technologies like React, Node.js, and MongoDB to create full-stack projects. Alongside development, I actively practice data structures and algorithms to strengthen my problem-solving skills and write efficient, scalable solutions. I’m always eager to learn new technologies and take on challenging projects that allow me to grow as a developer.
                            </p>
                        </div>
                        

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-3  gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                            <span className="text-2xl md:text-6xl font-bold text-orange-400">
                                {stat.value}
                            </span>
                            <span className={`font-medium text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                                {stat.label}
                            </span>
                            </div>
                        ))}
                        </div>

                        {/* Action Button */}
                        <button className={`group relative px-8 py-3 border-2 border-orange-400 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-200 flex items-center gap-2 ${darkMode ? 'bg-slate-900/50 text-white' : 'bg-white'}`}>
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