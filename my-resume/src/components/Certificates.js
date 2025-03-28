import { motion } from "framer-motion";

function Certificates() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Honors & Certifications</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>🏅 Erudite Scholarship – Shanghai DianJi University (Academic Excellence)</li>
        <li>📜 CS50: Introduction to Computer Science – Harvard University</li>
        <li>📜 Python for Everybody – University of Michigan</li>
        <li>📜 Meta Front-End Developer – Meta</li>
      </ul>
    </motion.section>
  );
}

export default Certificates;
