import { FiMail, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <img
          src={process.env.PUBLIC_URL + "/my-avatar.png"}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-600">Sicong Yan</h1>
          <p className="text-gray-600">Frontend Developer</p>

          <div className="mt-2 space-y-1 text-sm">
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
        </div>
      </div>
    </motion.section>
  );
}

export default Header;
