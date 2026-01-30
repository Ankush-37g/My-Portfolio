import instagram from '../assets/insta.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'
import git from '../assets/git.png'
import CV from '../assets/CV.pdf'
import { Download, Mail } from 'lucide-react'
import home from '../assets/home.png'


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

    const theme = darkMode ? darkTheme : lightTheme;
  
    return (
    <div className=' relative overflow-hidden min-h-screen flex flex-col'>

        <section
        id= 'home'
        data-aos='fade-up' 
        data-aos-delay='250'
        className='body-font z-10'>
                
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-7 mt-14'>

              <div className='lg:w-1/2 w-full flex flex-col items-center
                   lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

                 {/* Social Icons */}
                <div className='flex space-x-6 sm:mb-7 mb-6 w-full justify-center lg:justify-start'>
                    {socialIcons.map((social, index) => (
                        <a key={index} href='#' data-aos-delay={`${400 + index * 100}`} className='transform hover:scale-110 transition-transform duration-300'>
                            <img src={social.icon} alt={social.alt} className='w-8 h-8 sm:h-10 sm:w-10' />
                        </a>
                    ))}
                </div>       

                {/* Title */}
                <h1 
                    className={`title-font text-3xl lg:text-5xl mb-4 font-bold ${theme.textPrimary} `}
                    data-aos='fade-up'
                    data-aos-delay='500'
                >
                    Hi, I'm <span className='text-orange-500'>Ankush Sharma</span>
                </h1>

                {/* Text */}
                <p 
                  className={`${theme.textSecondary} sm:mb-8 mb-6 max-w-md sm:max-w-lg`}
                  data-aos='fade-up'
                  data-aos-delay='600'
                >
                        A passionate Full Stack Developer, focused on building responsive, user-friendly web applications and continuously learning modern technologies.
                </p>

                {/* Buttons */}
                <div className='w-full pt-4 sm:pt-6'>

                    <div 
                        className='flex flex-col sm:flex-row justify-center
                                lg:justify-start gap-3 sm:gap-4' 
                        data-aos='fade-up' 
                        data-aos-delay='700'>

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
              <div className='lg:w-1/2 w-full flex justify-center lg:max-w-lg mt-8 lg:mt-0' 
                   data-aos='fade-left' 
                   data-aos-delay='400'>

                    <div className={`relative w-4/5 sm:w-3/4 lg:w-full `}>
                        <div className='relative overflow-hidden'>
                            <img 
                            src={home} 
                            alt='Hero Image' 
                            className='w-full h-full object-cover transform hover:scale-105 
                            transition-transform duration-500 rounded-lg shadow-lg'/>
                        </div>
                    </div>
              </div>
            </div>
        </section>
    </div>
    );

}
export default Hero;