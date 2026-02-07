import instagram from '../assets/insta.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'
import git from '../assets/git.png'
import CV from '../assets/CV.pdf'
import { Download, Mail } from 'lucide-react'
import home from '../assets/home.png'
import LogoLoop from '@/3dcomponents/logoLoop.jsx'
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
    <div className=' relative overflow-hidden min-h-screen flex flex-col'>

        <section
            id= 'home'
            data-aos='fade-up' 
            data-aos-delay='250'
            className='body-font z-10'
        >
                
            <div className='container mx-auto flex flex-col lg:flex-row px-4 sm:px-8 lg:px-14 py-12 lg:py-25 items-center justify-between lg:mt-7 mt-14 gap-8 lg:gap-0'>

                    <div className='lg:w-3/5 w-full flex flex-col mb-12 lg:mb-0 '>

                    
                        <div className='lg:w-9/11 sm:w-full mb-3'>
                            
                            {/* Basic horizontal loop */}
                            <LogoLoop
                                logos={techLogos}
                                speed={70}
                                direction="left"
                                logoHeight={30}
                                gap={40}
                                hoverSpeed={0}
                                scaleOnHover
                        
                                iconColor={darkMode ? "white" : "black"}
                                ariaLabel="Technology partners"
                            />
                                       
                        </div> 

                        {/* Title */}
                        <h1 
                            className={`title-font text-4xl text-center md:text-start  sm:text-5xl md:text-6xl lg:text-8xl mb-4 font-bold ${theme.textPrimary} `}
                            data-aos='fade-up'
                            data-aos-delay='500'
                        >
                            Hi, I'm <span className='text-orange-500'>Ankush <br></br> Sharma</span>
                        </h1>

                        {/* Text */}
                        <p 
                        className={`${theme.textSecondary} sm:mb-8 mb-6 textlg:text-2xl sm:text-xl ml-5`}
                        data-aos='fade-up'
                        data-aos-delay='600'
                        >
                                A passionate Full Stack Developer, focused on building responsive, <br></br> user-friendly web applications and continuously learning modern technologies.
                        </p>

                        {/* Buttons */}
                        <div className='w-full pt-4 sm:pt-6'>

                            <div 
                                className='flex flex-col sm:flex-row justify-start gap-3 sm:gap-4'             
                               >

                                <a href={CV} download className='w-full sm:w-auto'>
                                
                                    <button className='w-full sm:w-auto inline-flex items-center justify-center  text-white
                                                    bg-gradient-to-r from-orange-500 to-amber-500 border-0
                                                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                                    rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                                    
                                                    
                                            <Download size={20} className='mr-2'/>
                                            Download CV
                                    </button>

                                </a>

                                <a href="#contact" className='w-full sm:w-auto'>
                                
                                    <button className={`${theme.buttonSecondary} w-full sm:w-auto inline-flex items-center justify-center text-white
                                            border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                            rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                    
                                            <Mail size={20} className={`${theme.textSecondary} mr-2`}/>
                                            <p className={`${theme.textSecondary}`}>Contact Me</p>
                                    </button>

                                </a>


                            </div>

                        </div>

                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-2/5 flex justify-center items-center' 
                       >

                            <img 
                            src={home} 
                            alt='Hero Image' 
                            className='w-64 sm:w-80 h-64 sm:h-80 lg:w-full lg:h-full object-contain transform hover:scale-105 
                            transition-transform duration-500 rounded-lg shadow-lg'/>        
                    </div>
              
            </div>

        </section>

    </div>
    );

}
export default Hero;