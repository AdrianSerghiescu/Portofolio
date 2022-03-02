import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { pageTransition, container, item } from "../../Transition";
import { ParticleSkill } from "../Particles/ParticleSkill";

export function Experience() {
  return (
    <motion.div
      className="experience"
      initial="hidden"
      animate="show"
      exit="out"
      variants={container}
      transition={{
        delay: 1,
        default: { duration: 0.5 },
        pageTransition,
      }}
    >
      <ParticleSkill />
      <h1 className="title-xp">My Experience</h1>
      <div className="experience-container">
        <motion.div className="experience-post" variants={item}>
          <div className="content-img">
            <motion.img
              alt="scoala informala logo"
              src="images/siit.png"
              viewBox="0 0 50 50"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatDelay: 12,
                delay: 1.5,
              }}
            />
          </div>
          <div className="content-info">
            <div className="content-date">
              <span>June - August 2021</span>
            </div>
            <h1 className="content-title">Course Intro in IT</h1>
            <p className="content-text">
              In this course, I learned the basics of programming thinking and
              how to use HTML, CSS and Javascript. I also learned a bit about
              MySqL. After my first "Hello World" the more i use it, the more
              comfortable i get with the programming languages. One of the
              things that helped me a lot is learning about different
              programming structures like if else statements, loops and arrays.
              These structures are very important when you are coding in
              javascript because they help you solve problems faster and easier.
            </p>
          </div>
        </motion.div>
        <motion.div className="experience-post" variants={item}>
          <div className="content-img">
            <motion.img
              alt="scoala informala logo"
              src="images/siit.png"
              viewBox="0 0 50 50"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                flip: Infinity,
                repeatDelay: 12,
                delay: 1.5,
              }}
            />
          </div>
          <div className="content-info">
            <div className="content-date">
              <span>September 2021 - January 2022</span>
            </div>
            <h1 className="content-title">Course Web Development</h1>
            <p className="content-text">
              This course has taught me how is to be a front-end developer, from
              what a function is and why my code is much cleaner and readable
              with anonymous functions to how async functions help to control
              the flow of your program, with Ecma script 6 who makes it easy to
              manipulate strings and dates for better performance.I have been
              introduced to many new concepts including object oriented
              programming on witch you could easily passing them between
              functions, to change the content with "Document object model",to
              load data without refreshing your page, improving responsiveness
              with Ajax call to React with state and props and hooks for
              building reusable modules and efficiently call only the code
              that's needed and many more.. As a result, i have been able to
              create my own small projects that are interactive and responsive.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div className="xp-skills" variants={item}>
        <div className="xp-item">
          <h5>
            <span className="span-html">
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </span>{" "}
            HTML
          </h5>
          <div className="xp-progress">
            <div className="progress-in-html"></div>
            <motion.div
              className="xp-percent"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              90%
            </motion.div>
          </div>
        </div>
        <div className="xp-item">
          <h5>
            <span className="span-css">
              <FontAwesomeIcon icon={faCss3} size="2x" />
            </span>{" "}
            CSS
          </h5>
          <div className="xp-progress">
            <div className="progress-in-css"></div>
            <motion.div
              className="xp-percent"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              60%
            </motion.div>
          </div>
        </div>
        <div className="xp-item">
          <h5>
            <span className="span-js">
              <FontAwesomeIcon icon={faJs} size="2x" />
            </span>{" "}
            JavaScript
          </h5>
          <div className="xp-progress">
            <div className="progress-in-js"></div>
            <motion.div
              className="xp-percent"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 3, repeat: Infinity, repeatDelay: 5 }}
            >
              45%
            </motion.div>
          </div>
        </div>
        <div className="xp-item">
          <h5>
            <span className="span-react">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </span>{" "}
            React
          </h5>
          <div className="xp-progress">
            <div className="progress-in-react"></div>
            <motion.div
              className="xp-percent"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 4, repeat: Infinity, repeatDelay: 5 }}
            >
              30%
            </motion.div>
          </div>
        </div>
        <div className="xp-item">
          <h5>
            <span className="span-github">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </span>
            GitHub
          </h5>
          <div className="xp-progress">
            <div className="progress-in-github"></div>
            <motion.div
              className="xp-percent"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 5, repeat: Infinity, repeatDelay: 5 }}
            >
              75%
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
