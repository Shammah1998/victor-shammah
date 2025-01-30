import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground">
            Victor <span className="text-primary">Shammah</span>
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-foreground/80">
            Senior Software Engineer
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground px-4">
            Results-driven Senior Software Engineer with over 4 years of experience in backend development,
            cloud computing, and cybersecurity. Passionate about delivering high-performance,
            scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 px-4">
            <a
              href="mailto:victorshammah50@gmail.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors text-sm sm:text-base"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/victor-shammah-8949211b2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors text-sm sm:text-base"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;