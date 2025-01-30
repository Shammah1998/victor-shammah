import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Get In Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <a
            href="tel:+254725940547"
            className="flex flex-col items-center p-4 sm:p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2">Phone</h3>
            <p className="text-sm sm:text-base text-muted-foreground">+254 725 940 547</p>
          </a>
          <a
            href="mailto:victorshammah50@gmail.com"
            className="flex flex-col items-center p-4 sm:p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2">Email</h3>
            <p className="text-sm sm:text-base text-muted-foreground">victorshammah50@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/victor-shammah-8949211b2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 sm:p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors sm:col-span-2 lg:col-span-1"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Connect with me</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;