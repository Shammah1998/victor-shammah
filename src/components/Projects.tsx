import { motion } from 'framer-motion';

const projects = [
  {
    title: "Order Management System",
    description: "Designed and implemented a system reducing processing time by 35% and improving order accuracy by 25%.",
    tech: ["PHP", "Laravel", "MySQL"]
  },
  {
    title: "Payment Gateway Integration",
    description: "Integrated secure payment gateway resulting in 15% increase in repeat customers.",
    tech: ["Python", "Django", "API Integration"]
  },
  {
    title: "Courier Tracking API",
    description: "Developed robust tracking API improving customer satisfaction by 20%.",
    tech: ["Java", "Spring Boot", "MongoDB"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card bg-secondary/10 rounded-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;