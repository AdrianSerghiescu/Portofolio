import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./styles.css";
import { pageTransition, container, item } from "../../Transition";

export function AboutMe() {
  return (
    <motion.div
      className="about-section"
      initial="hidden"
      animate="show"
      exit="out"
      variants={container}
      transition={{
        delay: 2,
        default: { duration: 1 },
        pageTransition,
      }}
    >
      <div className="about-container">
        <div className="about-content-section">
          <motion.div className="about-title" variants={item}>
            <h1>About me</h1>
          </motion.div>
          <motion.div className="about-content" variants={item}>
            <h3>“It's not a bug. It's an undocumented feature!”</h3>
            <p>
              I am a junior front-end developer with 8 months of experience in
              the field. When i first started, i was interested in backend
              languages like Java but after some research, i found out that
              front-end is more of what i am looking for because it's more
              eye-catching and interactive when you are developing websites or
              apps. I have been learning programming languages at "Scoala
              informala de IT", where i learned HTML, CSS, JavaScript, React.
              I'm familiar with Github and also have a small experience with
              MySQL.I am new to the world of front-end development, but I am
              eager to learn new skills and share my knowledge with others.
              Currently i am looking for a job where i can use my enthusiasm to
              make an impact on the company's success.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="about-image-section"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            viewBox="0 0 50 50"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              flip: Infinity,
              repeatDelay: 15,
              delay: 1.5,
            }}
            src="images/euu.jpg"
            alt="may missing"
          ></motion.img>
          <div className="about-social">
            <motion.a
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 1, repeat: Infinity, repeatDelay: 5 }}
              href="https://github.com/AdrianSerghiescu"
              target="_blank"
              rel="noreferrer"
              className="github-a social-about"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </motion.a>
            <motion.a
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 2, repeat: Infinity, repeatDelay: 5 }}
              href="https://www.facebook.com/adrian.serghiescu1/"
              target="_blank"
              rel="noreferrer"
              className="facebook-a social-about"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </motion.a>
            <motion.a
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 3, repeat: Infinity, repeatDelay: 5 }}
              href="https://www.linkedin.com/in/adrian-serghiescu-7301b922b/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-a social-about"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </motion.a>
            <motion.a
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: 360,
              }}
              transition={{ delay: 4, repeat: Infinity, repeatDelay: 5 }}
              href="/images/Adrian-SerghiescuCV.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="pdf-a social-about"
            >
              <FontAwesomeIcon icon={faFileDownload} size="2x" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
