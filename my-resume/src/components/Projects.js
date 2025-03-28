import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* 卡片 1 */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition space-y-2">
          <h3 className="text-lg font-bold">Portfolio Website</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A personal portfolio built with React and Tailwind.
          </p>
          {/* 技术标签 */}
          <div className="flex gap-2 flex-wrap text-xs">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
              React
            </span>
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
              Tailwind CSS
            </span>
          </div>
          {/* 项目链接 */}
          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-500 hover:underline"
          >
            🔗 View Project
          </a>
          <div className="text-xs text-gray-400 dark:text-gray-500">2024.08</div>
        </div>

        {/* 卡片 2 */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition space-y-2">
          <h3 className="text-lg font-bold">Task Manager App</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Todo App with drag and drop, built in React.
          </p>
          <div className="flex gap-2 flex-wrap text-xs">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
              React
            </span>
            <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded">
              Zustand
            </span>
          </div>
          <a
            href="https://your-todo-app-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-500 hover:underline"
          >
            🔗 View Project
          </a>
          <div className="text-xs text-gray-400 dark:text-gray-500">2024.05</div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
