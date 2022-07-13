import React from "react";
import "./portfolio.css";
import { Button } from "@material-ui/core";
import data from "./data";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="portfolio"
    >
      <div className="header">
        <h5>Portfolio</h5>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 300,
            marginTop: 0,
            marginBottom: 0,
            color: "orange",
          }}
        >
          Here is a list of some of the projects that i have worked on
        </h3>
      </div>
      <div className="portfolio__contents">
        {data.map((dat, index) => (
          <div className="portfolio__content" key={index}>
            <div className="project__image">
              <img src={dat.image} alt="project" />
            </div>
            <div className="project__details">
              <h1>{dat.name}</h1>
              <h2 style={{ color: "orange", fontWeight: 300 }}>
                {dat.technology}
              </h2>
              <h3 style={{ fontWeight: 100 }}>{dat.description}</h3>
              <div className="btn">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "1.5rem",
                  }}
                >
                  <a
                    href={dat.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    GitHub
                  </a>
                </Button>

                <Button variant="contained" color="primary">
                  <a
                    href={dat.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                    }}
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
