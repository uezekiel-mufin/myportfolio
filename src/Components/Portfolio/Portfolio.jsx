import React from "react";
import "./portfolio.css";
import WorkIcon from "@mui/icons-material/Work";
import { Button, Grid } from "@material-ui/core";

import data from "./data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='portfolio'
    >
      <div className='header'>
        <h5>Resume</h5>
        <h3 style={{ fontSize: "2rem", marginTop: 0, marginBottom: "2px" }}>
          My Credentials
        </h3>
        <h3 style={{ fontSize: "1.5rem", marginTop: 0, marginBottom: 0 }}>
          Here are detailed information about my credentials and my current and
          past work experience.
        </h3>
      </div>
      <div className='portfolio__contents'>
        {data.map((dat, index) => (
          <div className='portfolio__content' key={index}>
            <div className='project__image'>
              <img src={dat.image} alt='project' />
            </div>
            <div className='project__details'>
              <h1>{dat.name}</h1>
              <h2>{dat.technology}</h2>
              <h3>{dat.description}</h3>
              <div className='btn'>
                <Button
                  size='large'
                  variant='contained'
                  color='primary'
                  style={{
                    marginRight: "1.5rem",
                    // backgroundColor: "white",
                  }}
                >
                  <a
                    href={dat.gitHub}
                    target='_blank'
                    rel='noreferrer'
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    GitHub
                  </a>
                </Button>

                <Button variant='contained' color='primary'>
                  <a
                    href={dat.liveDemo}
                    target='_blank'
                    rel='noreferrer'
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    LiveDemo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
