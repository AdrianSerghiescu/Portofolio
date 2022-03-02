import "./styles.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { animation } from "../../Transition";

export function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <motion.div
      className="form-box-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animation}
      transition={{
        duration: 1,
      }}
    >
      <section className="form-contact">
        <div className="form-content"></div>
        <div className="form-container">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">
                <i>
                  <FontAwesomeIcon icon={faUser} size="1x" />
                </i>
              </div>
              <div className="info-text">
                <h3>Name</h3>
                <p>Adrian Serghiescu</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <i>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
                </i>
              </div>
              <div className="info-text">
                <h3>Address</h3>
                <p>Bucharest,Romania</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <i>
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="1x" />
                </i>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>adrian.serghiescu@yahoo.com</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <i>
                  <FontAwesomeIcon icon={faPhone} size="1x" />
                </i>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>0733 332 457</p>
              </div>
            </div>
            <div className="about-social-form">
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
                <FontAwesomeIcon icon={faFilePdf} size="2x" />
              </motion.a>
            </div>
          </div>
          <div className="contactForm">
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <h2>Feel free to contact me</h2>

              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  {...register("firstname", {
                    pattern: {
                      value: /^[A-Za-z]*$/,
                      message: "Only letters are allowed",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum required length is 2",
                    },
                    maxLength: {
                      value: 12,
                      message: "Maximum allowed length is 12 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("firstname");
                  }}
                />
                {errors.firstname && (
                  <span className="text-danger">
                    {errors.firstname.message}
                  </span>
                )}
                <span>First Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  {...register("lastname", {
                    pattern: {
                      value: /^[A-Za-z]*$/,
                      message: "Only letters are allowed",
                    },
                    minLength: {
                      value: 3,
                      message: "Minimum required length is 3",
                    },
                    maxLength: {
                      value: 12,
                      message: "Maximum allowed length is 12 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("lastname");
                  }}
                />
                {errors.lastname && (
                  <span className="text-danger">{errors.lastname.message}</span>
                )}
                <span>Last Name</span>
                <span className="line"></span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
                <span className="text">Email Address</span>
                <span className="line"></span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9""]*$/,
                      message: "Invalid phone number",
                    },
                    minLength: {
                      value: 10,
                      message: "Minimum Required length is 10",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum allowed length is 20 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phone");
                  }}
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone.message}</span>
                )}
                <span className="text">Phone Number</span>
                <span className="line"></span>
              </div>
              <div className="inputBox">
                <textarea
                  required="required"
                  {...register("message", {
                    pattern: {
                      value: /^[A-Za-z0-9""@!?]*$/,
                      message:
                        "Message should contain letters,numbers,usual simbols",
                    },
                    minLength: {
                      value: 10,
                      message: "Minimum Required length is 10",
                    },
                    maxLength: {
                      value: 100,
                      message: "Maximum allowed length is 100 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("message");
                  }}
                ></textarea>
                {errors.message && (
                  <span className="text-danger">{errors.message.message}</span>
                )}
                <span className="text">Type Your Message Here..</span>
                <span className="line"></span>
              </div>
              <div className="inputBox">
                <motion.input
                  type="submit"
                  className="submit-btn"
                  value="Send message"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
