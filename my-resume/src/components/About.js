import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">About Me</h2>
      <p>
        I am a passionate frontend developer with a love for clean UI, reusable
        components, and delightful user experiences.
      </p>
    </motion.section>
  );
}

export default About;
