import { FiMail, FiGithub } from "react-icons/fi";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6 relative">
        <ThemeToggle />
        <Header />

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          {" "}
          <About />{" "}
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          {" "}
          <Skills />{" "}
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          {" "}
          <Projects />{" "}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          {" "}
          <Education />{" "}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          {" "}
          <Experience />{" "}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          {" "}
          <Certificates />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
