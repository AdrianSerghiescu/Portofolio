import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { pageTransition, container, item } from "../../Transition";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <motion.div
      className="project-cards"
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
      <div className="project-container">
        <Link to="/todo_page">
          <motion.div className="project-card" variants={item}>
            <div className="img-Box">
              <img
                src="https://media.istockphoto.com/photos/new-year-goal-plan-action-picture-id1331629491?b=1&k=20&m=1331629491&s=170667a&w=0&h=97grkoEOAgrgWBoNL9ZUyGyjoFPYwApvj425BePS37E="
                alt="project"
              />
            </div>
            <div className="project-content">
              <h4 className="title">To Do List</h4>
              <p className="project-description">To Do List</p>
            </div>
          </motion.div>
        </Link>
        <Link to="/quotes_page">
          <motion.div className="project-card" variants={item}>
            <div className="img-box">
              <img
                src="https://images.unsplash.com/photo-1499332251574-a76a01d733fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="project"
              />
            </div>
            <div className="project-content">
              <h4 className="title">Random Quotes</h4>
              <p className="project-description">Random quotes generator</p>
            </div>
          </motion.div>
        </Link>
        <Link to="/random_dog_page">
          <motion.div className="project-card" variants={item}>
            <div className="img-box">
              <img
                src="https://media.istockphoto.com/photos/thinking-of-remodeling-your-home-picture-id1174420162?k=20&m=1174420162&s=612x612&w=0&h=MdG33iyPTmoD49SS1NtWzDNZCh-J_JOh92AWjckVUj8="
                alt="project"
              />
            </div>
            <div className="project-content">
              <h4 className="title">Random Dog Image</h4>
              <p className="project-description">Random image dog generator</p>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};
