import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import { motion } from "framer-motion";
import {
  pageTransition,
  pageVariants,
  pageVariantsFromBottom,
  pageVariantsFromLeft,
  pageStyle,
} from "../../Transition";
import { ParticleHome } from "../Particles/ParticleHome";
import "./styles.css";

export function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        repeat: 0,
        delay: 0,
      }}
    >
      <ParticleHome />
      <div className="info-container">
        <motion.div
          className="h2-container"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsFromLeft}
          transition={{ pageTransition, duration: 2.5 }}
        >
          <h2 className="home-heading">Hello, my name is </h2>
        </motion.div>
        <motion.div
          className="h1-container"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsFromBottom}
          transition={{
            pageTransition,
            delay: 0.5,
            default: { duration: 3 },
            pageStyle,
          }}
        >
          <h1 className="home-heading_header">Adrian Serghiescu </h1>
        </motion.div>
        <motion.div
          className="p-container"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ pageTransition, duration: 3 }}
        >
          <motion.p
            viewBox="0 0 50 50"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 360 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2.5,
            }}
          >
            {" "}
            <b className="typical">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Optimistic",
                  1000,
                  "Learner",
                  1000,
                  "Junior Frontend Developer",
                  1000,
                  "Dreamer",
                  1000,
                  "Adventurous",
                  1000,
                  "Adaptable",
                  1000,
                  "Intuitive",
                  1000,
                  "Determined",
                  1000,
                  "Dynamic",
                  1000,
                  "Passionate",
                  1000,
                  "Ambitious",
                  1000,
                  "Reliable",
                  1000,
                  "Hard-working",
                  1000,
                  "Self-confident",
                  1000,
                ]}
              />
            </b>
          </motion.p>
        </motion.div>
        <Link to="/about_me">
          <motion.button
            className="about-me_btn"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{
              pageTransition,
              delay: 1,
              default: { duration: 2 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.button>
        </Link>
      </div>
      <motion.div
        className="font-aws"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.a
          animate={{ rotate: 360 }}
          transition={{ from: 0, duration: 10, repeat: 20 }}
          href="https://github.com/AdrianSerghiescu"
          target="_blank"
          rel="noreferrer"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </motion.a>
        <motion.a
          animate={{ rotate: 360 }}
          transition={{ from: 0, duration: 10, repeat: 20 }}
          href="https://www.facebook.com/adrian.serghiescu1/"
          target="_blank"
          rel="noreferrer"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </motion.a>
        <motion.a
          animate={{ rotate: 360 }}
          transition={{ from: 0, duration: 10, repeat: 20 }}
          href="https://www.linkedin.com/in/adrian-serghiescu-7301b922b/"
          target="_blank"
          rel="noreferrer"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
