import instagram from '../assets/insta.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'
import git from '../assets/git.png'
import CV from '../assets/CV.pdf'
import { Download, Mail } from 'lucide-react'
import home from '../assets/home.png'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


const Hero = ({darkMode}) => {

    const socialIcons = [
        {icon: instagram, alt: 'Instagram'},
        {icon: tiktok, alt: 'TikTok'},
        {icon: youtube, alt: 'YouTube'},
        {icon: git, alt: 'GitHub'}
    ];

    const darkTheme = {
        textPrimary : 'text-white',
        textSecondary : 'text-gray-300',
        buttonSecondary : 'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle: 'bg-orange-500 opacity-10',
    };
    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20',
    };

    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];
    // Alternative with image sources
    const imageLogos = [
        { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
    ];

    const theme = darkMode ? darkTheme : lightTheme;
  
    return (
    

        <section
            id= 'home'
            data-aos='fade-up' 
            data-aos-delay='250'
            className='body-font z-10 pt-16 sm:pt-28'
        >
            <div className='container mx-auto flex justify-center p-6 font-sans'>
                
                <div className='flex flex-col lg:flex-row py-9 items-center justify-between gap-8'>

                        {/* Left part */}
                        <div className='lg:w-3/5 flex flex-col mb-12 lg:mb-0 '>
                            
                            {/* Social Icons */}
                            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-5 w-full">
                                {socialIcons.map((social, index) => (
                                    <a 
                                        key={index} 
                                        href="#" 
                                        target="_blank" 
                                        data-aos-delay={`${400 + index * 100}`}
                                        rel="noopener noreferrer"
                                        className='transform hover:scale-110 transition-transform duration-300'
                                    >
                                        <img src={social.icon} alt={social.alt} className="w-6 h-6 sm:w-10 sm:h-10 object-contain rounded-2xl" />
                                    </a>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 
                                className={`title-font text-center md:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 font-bold ${theme.textPrimary} `}
                                data-aos='fade-up'
                                data-aos-delay='500'
                            >
                                Hi, I'm <span className='text-orange-500'>Ankush <br /> Sharma</span>
                            </h1>

                            {/* Text */}
                            <p 
                            className={`${theme.textSecondary} sm:mb-6 mb-5 text-gray-lg max-w-xl`}
                            data-aos='fade-up'
                            data-aos-delay='600'
                            >
                                      A passionate Full Stack Developer dedicated to creating responsive, 
    user-friendly, and efficient web applications. I enjoy turning ideas 
    into real-world digital solutions and focus on building clean, intuitive, 
    and meaningful user experiences. I am always eager to learn, grow, and 
    continuously improve my skills.
                            </p>

                            {/* Buttons */}
                            <div className='w-full pt-4 sm:pt-6'>

                                <div 
                                    className='flex flex-col sm:flex-row justify-start gap-2 sm:gap-3'             
                                >

                                    <a href={CV} download className='w-full sm:w-auto'>
                                    
                                        <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                        rounded-full text-xl sm:text-2xl font-semibold transition-all             
                                        duration-300 transform'>               
                                                          
                                              <Download size={28} className='mr-2'/>
                                               Download CV          
                                                               
                                        </button>

                                    </a>

                                    <a href="#contact" className='w-full sm:w-auto'>
                                    
                                        <button className={`${theme.buttonSecondary} w-full sm:w-auto inline-flex items-center justify-center text-white
                                                border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                                rounded-full text-xl sm:text-2xl font-semibold transition-all duration-300 transform`}>
                                        
                                                <Mail size={28} className={`${theme.textSecondary} mr-2`}/>
                                                <p className={`${theme.textSecondary}`}>Contact Me</p>
                                        </button>

                                    </a>


                                </div>

                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end" 
                        >
                                <img 
                                src={home} 
                                alt='Hero Image' 
                                 className='w-[285px] sm:w-[337px] md:w-[450px] lg:w-[675px] transform hover:scale-105 transition-transform duration-500'/>           
                        </div>
                
                </div>

            </div>

        </section>

   
    );

}
export default Hero;