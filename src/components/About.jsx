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
            <div className={`min-h-screen flex items-center justify-center p-6 md:p-10 font-sans ${darkMode ? 'bg-black/50' : 'bg-white'}`}>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">

                    {/* Left side: image} */}
                    <div className="flex justify-center lg:justify-start" 
                        data-aos='fade-right' 
                        data-aos-delay='400'>

                        <img src={avatar} alt="Avatar" className="w-full h-full " />
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-8" data-aos='fade-left' data-aos-delay='200'>
        
                        <h1 className= {`text-5xl text-center md:text-8xl font-semibold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            About <span className="text-orange-500">Me</span>
                        </h1>
                        
                        <div className={`p-8 rounded-[2.5rem] mb-10 shadow-sm border relative ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                            <p className={`text-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Dolore suscipit expedita blanditiis temporibus nostrum 
                            nulla fugit consequuntur! Ullam earum perspiciatis sit ea, 
                            asperiores dolorum illum temporibus quidem? Iusto, 
                            officia mollitia!
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