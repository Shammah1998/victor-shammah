import { useEffect, useRef } from 'react';

const skills = [
  { 
    category: 'Programming Languages', 
    items: [
      { name: 'PHP', level: 98 },
      { name: 'Python', level: 95 },
      { name: 'Java', level: 90 }
    ]
  },
  { 
    category: 'Frameworks', 
    items: [
      { name: 'Laravel', level: 95 },
      { name: 'React.js', level: 92 },
      { name: 'Django', level: 88 }
    ]
  },
  { 
    category: 'Cloud/DevOps', 
    items: [
      { name: 'AWS', level: 90 },
      { name: 'Google Cloud', level: 85 },
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 88 }
    ]
  },
  { 
    category: 'Databases', 
    items: [
      { name: 'MySQL', level: 95 },
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 88 }
    ]
  },
  { 
    category: 'Security', 
    items: [
      { name: 'CISSP', level: 95 },
      { name: 'Encryption', level: 90 },
      { name: 'Vulnerability Assessments', level: 92 }
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('.skill-item');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="skill-item opacity-0 bg-secondary/10 rounded-lg p-4 sm:p-6 hover:bg-secondary/20 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill.name} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-1.5 sm:h-2">
                      <div
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;