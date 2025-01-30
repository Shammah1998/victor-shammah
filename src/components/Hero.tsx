import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
            Victor <span className="text-primary">Shammah</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-foreground/80">
            Senior Software Engineer
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Results-driven Senior Software Engineer with over 4 years of experience in backend development,
            cloud computing, and cybersecurity. Passionate about delivering high-performance,
            scalable solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:victorshammah50@gmail.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/victor-shammah-8949211b2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
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