import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <a
            href="tel:+254725940547"
            className="flex flex-col items-center p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+254 725 940 547</p>
          </a>
          <a
            href="mailto:victorshammah50@gmail.com"
            className="flex flex-col items-center p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">victorshammah50@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/victor-shammah-8949211b2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            <Linkedin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground">Connect with me</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;