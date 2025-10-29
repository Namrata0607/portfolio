"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { 
  SiJavascript,
  SiPython,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiOracle
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const BLUR_FADE_DELAY = 0.04;

// Skill icons mapping using react-icons with single color theme
const skillIcons: { [key: string]: React.ReactNode } = {
  // Languages
  "Java": <FaJava size={24} />,
  "JavaScript": <SiJavascript size={24} />,
  "PHP": <SiPhp size={24} />,
//   "C": <SiC size={24} />,
  "C++": <SiCplusplus size={24} />,
  "Python": <SiPython size={24} />,
  "HTML": <SiHtml5 size={24} />,
  "CSS": <SiCss3 size={24} />,
  
  // Libraries/Frameworks
  "React.js": <SiReact size={24} />,
  "Node.js": <SiNodedotjs size={24} />,
  "Express.js": <SiExpress size={24} />,
  "Tailwind CSS": <SiTailwindcss size={24} />,
  "Bootstrap": <SiBootstrap size={24} />,
  "Flutter": <SiFlutter size={24} />,
  
  // Tools/Platforms
  "Git": <SiGit size={24} />,
  "GitHub": <SiGithub size={24} />,
  "Postman": <SiPostman size={24} />,
  
  // Databases
  "MySQL": <SiMysql size={24} />,
  "MongoDB": <SiMongodb size={24} />,
  "PostgreSQL": <SiPostgresql size={24} />,
  "Firebase": <SiFirebase size={24} />,
};

// Categorized skills data
const skillCategories = {
  "Languages": ["Java", "JavaScript", "PHP", "C++", "Python", "HTML", "CSS"],
  "Libraries/Frameworks": ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Flutter"],
  "Tools/Platforms": ["Git", "GitHub", "Postman"],
  "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
};

export function SkillsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground relative inline-block">
            Skills
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-sm text-muted-foreground">Technologies I work with</p>
        </div>
      </BlurFade>
      
      {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
        <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.1}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-foreground">{category}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-muted to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {skills.map((skill, skillIndex) => (
                <BlurFade 
                  key={skill} 
                  delay={BLUR_FADE_DELAY * 11 + categoryIndex * 0.1 + skillIndex * 0.05}
                >
                  <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 bg-background">
                    <CardContent className="flex flex-col items-center justify-center p-3 h-20">
                      <div className="text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                        {skillIcons[skill] || <SiOracle size={24} />}
                      </div>
                      <span className="text-xs font-medium text-center leading-tight text-foreground">
                        {skill}
                      </span>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}