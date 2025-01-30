import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "XOBO Delivery Ltd",
    period: "Feb 2023 - Present",
    achievements: [
      "Spearheaded system architecture optimization, increasing efficiency by 30%",
      "Led RESTful API development, enhancing interoperability by 40%",
      "Managed cloud deployments with 99.9% uptime",
      "Established security protocols reducing incidents by 25%"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "XOBO Delivery Ltd",
    period: "Feb 2021 - Jan 2023",
    achievements: [
      "Engineered backend solutions improving performance by 25%",
      "Developed APIs accelerating integration processes by 35%",
      "Optimized database operations cutting retrieval times by 20%"
    ]
  },
  {
    title: "Information Technology Intern",
    company: "XOBO Delivery Ltd",
    period: "Jan 2020 - Jan 2021",
    achievements: [
      "Contributed to backend development enhancing efficiency by 15%",
      "Assisted in API integration reducing implementation time by 20%",
      "Conducted system health assessments improving troubleshooting"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="relative">
          <div className="experience-line" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8"
              >
                <div className="absolute left-[-5px] top-0 w-3 h-3 bg-primary rounded-full" />
                <div className="bg-secondary/10 rounded-lg p-6 hover:bg-secondary/20 transition-colors">
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-muted-foreground mt-1">{exp.company} | {exp.period}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;