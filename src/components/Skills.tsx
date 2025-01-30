import { useEffect, useRef } from 'react';

const skills = [
  { category: 'Programming Languages', items: ['PHP', 'Python', 'Java'] },
  { category: 'Frameworks', items: ['Laravel', 'React.js', 'Django'] },
  { category: 'Cloud/DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Security', items: ['CISSP', 'Encryption', 'Vulnerability Assessments'] }
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
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="skill-item opacity-0 bg-secondary/10 rounded-lg p-6 hover:bg-secondary/20 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-full bg-secondary/20 rounded-full h-2">
                      <div
                        className="skill-bar"
                        style={{ width: '85%' }}
                      />
                    </div>
                    <span className="ml-3 text-sm">{skill}</span>
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