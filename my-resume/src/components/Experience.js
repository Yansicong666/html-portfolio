import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
      <div>
        <h3 className="font-bold">Process Engineer – Johnson Controls / Adient Automotive</h3>
        <p className="text-sm text-gray-600">Shanghai, China | 2014 – 2022</p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
          <li>Prepared process documents (Flow Chart, PFMEA, SOP) and trained workers.</li>
          <li>Collected production data and identified process improvement opportunities.</li>
          <li>Led trials and transition to eco-friendly raw materials with suppliers.</li>
          <li>Resolved on-site technical issues during manufacturing.</li>
          <li>Designed fixtures and plant layouts using AutoCAD and SolidWorks.</li>
          <li>Managed new product development from small batch trials to mass production.</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Experience;
