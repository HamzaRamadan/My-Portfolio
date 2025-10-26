import { useState } from "react";
import "./Projects.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    if (buttonCategory === "all") {
      setArr(myProjects);
    } else {
      const newArr = myProjects.filter((item) => {
        return item.category.includes(buttonCategory);
      });
      setArr(newArr);
    }
  };

  const categories = ["all", ...new Set(myProjects.flatMap((item) => item.category))];

  return (
    <section className="flex flex-col items-center min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[#000] mb-8">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I offer a range of frontend development services to help bring your ideas to life.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  currentActive === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
                onClick={() => handleClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {arr.map((item) => (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img src={item.imgPath} alt={item.projectTitle} className="card-image" />
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.subTitle || "No description available"}</p>
                  <div className="flex icons flex-row justify-between items-center w-full">
                    <div className="icon-container flex items-center gap-4">
                      <a href={item.linkWebSite} target="_blank" rel="noopener noreferrer">
                        <InsertLinkIcon className="icon-link" />
                      </a>
                      <a href={item.GitHub} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="icon-github" />
                      </a>
                    </div>
                    <a className="link flex items-center" href="">
                      more
                      <ArrowForwardIcon className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Main;