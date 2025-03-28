import { motion } from "framer-motion";
function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>React, JavaScript, HTML, CSS</li>
        <li>Tailwind CSS, Git, REST APIs</li>
        <li>Responsive Design, UI/UX Basics</li>
      </ul>
    </motion.section>
  );
}

export default Skills;
