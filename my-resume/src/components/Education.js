import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold">Saskatchewan Polytechnic</h3>
          <p className="text-sm text-gray-600">Business Information Systems | 2023 – 2025</p>
          <ul className="list-disc list-inside text-sm mt-1">
            <li>Courses: Java, C#, Web & Mobile App Development, Data Structures, SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Shanghai DianJi University</h3>
          <p className="text-sm text-gray-600">B.Sc. in Industrial Engineering | 2010 – 2014</p>
          <p className="text-sm mt-1">
            Focused on optimizing industrial systems through operations research, supply chain,
            project management, and engineering automation.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
