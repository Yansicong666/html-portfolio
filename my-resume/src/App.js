import { FiMail, FiGithub } from "react-icons/fi";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

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
          <Contact />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
