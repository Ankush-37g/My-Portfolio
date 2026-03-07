import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  
} from "react-icons/fa";

import { 
  SiTailwindcss, 
  SiMongodb, 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiExpress, 
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiCplusplus 
} from "react-icons/si";

import LogoLoop from '@/3dcomponents/logoLoop.jsx'


const SkillCard = ({ name, proficiency, color, icon, darkMode }) => {
  return (
    <div className={`
      p-6 rounded-3xl border transition-all duration-300 group
      ${darkMode 
        ? 'bg-[#0f172a]/50 border-slate-800 hover:bg-[#1e293b]/50 shadow-xl' 
        : 'bg-white border-slate-200 hover:shadow-lg shadow-md'}
    `}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center shadow-inner
            ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}
          `}>
            {icon}
          </div>
          <h3 className={`text-xl font-bold capitalize ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            {name}
          </h3>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Proficiency</span>
            <span style={{ color: color }}>{proficiency}%</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className={`h-2.5 w-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
            <div 
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${proficiency}%`, 
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}44`
              }}
            />
          </div>
          
        
          <div 
            className="h-1 rounded-full opacity-40 w-2 group-hover:w-full transition-all duration-900" 
            style={{ backgroundColor: color }}
          />
        </div>
    </div>
  );
};

const Skills = ({ darkMode }) => {

    const skills = [
    {
        name: "React",
        proficiency: 90,
        color: "#61DAFB",
        icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />
    },
    {
        name: "Tailwind CSS",
        proficiency: 85,
        color: "#38BDF8",
        icon: <SiTailwindcss className="w-8 h-8 text-[#38BDF8]" />
    },
    {
        name: "Node.js",
        proficiency: 80,
        color: "#339933",
        icon: <FaNodeJs className="w-8 h-8 text-[#339933]" />
    },
    {
        name: "Express.js",
        proficiency: 78,
        color: "#15eaea",
        icon: <SiExpress className="w-8 h-8 text-white" />
    },
    {
        name: "MongoDB",
        proficiency: 82,
        color: "#47A248",
        icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />
    },
    {
        name: "C++",
        proficiency: 85,
        color: "#00599C",
        icon: <SiCplusplus className="w-8 h-8 text-[#00599C]" />
    },
    {
        name: "DSA",
        proficiency: 80,
        color: "#2563EB",
        icon: <FaDatabase className="w-8 h-8 text-[#2563EB]" />
    },
    {
        name: "Python",
        proficiency: 78,
        color: "#3776AB",
        icon: <SiPython className="w-8 h-8 text-[#3776AB]" />
    },
    {
        name: "SQL (PostgreSQL)",
        proficiency: 75,
        color: "#336791",
        icon: <SiPostgresql className="w-8 h-8 text-[#336791]" />
    },


    ];


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
    
    return (
       <section 
        id="skills"
        className='py-8 sm:py-14 relative overflow-hidden'>

            <div className="container mx-auto px-5 sm:py-14">

                <div className= 'mb-20 text-center ' data-aos='fade-up' data-aos-delay='200'>

                    <h1 className= {`text-5xl sm:text-4xl md:text-8xl font-semibold title-font mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        My 
                        <span className="text-orange-500"> Skills</span>
                    </h1>

                    <p className={`text-xl mx-auto max-w-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                        Here are some of the technologies and tools I have experience with:
                    </p>

                </div> 

                {/* Basic horizontal loop  */}
                <div className="mb-6 " data-aos='fade-up' data-aos-delay='400'>
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
                
                
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-8" data-aos='fade-up' data-aos-delay='400'>
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            name={skill.name}
                            proficiency={skill.proficiency}
                            color={skill.color}
                            icon={skill.icon}
                            darkMode={darkMode}
                        />
                    ))}
                </div>

            </div>

        </section>

    )
}

export default Skills;