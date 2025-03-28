import { FiMail, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";


function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <div className="space-y-1">
        <p className="flex items-center gap-2">
          <FiMail className="text-blue-500" />
          yansicong11@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <FiGithub className="text-blue-500" />
          <a
            href="https://github.com/yansicong666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/yansicong666
          </a>
        </p>
      </div>
      </motion.section>
  );
}

export default Contact;
