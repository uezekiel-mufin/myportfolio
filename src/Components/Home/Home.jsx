import { Button } from "@material-ui/core";
import React from "react";
import "./home.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const Home = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='home'
    >
      <motion.h5
        transition={{ duration: 2 }}
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hello,
      </motion.h5>
      <h2 style={{ fontWeight: 700, fontSize: 50, fontStyle: "italic" }}>
        I am Ezekiel Udiomuno
      </h2>
      <h2 style={{ display: "flex", color: "#13ed29" }}>
        A FrontEnd Web Developer
      </h2>

      <Link to='/contact'>
        <Button
          size='large'
          variant='contained'
          color='secondary'
          style={{ marginTop: "2rem" }}
        >
          <motion.h2
            transition={{ duration: 3 }}
            initial={{
              textShadow:
                "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073",
            }}
            animate={{
              textShadow: 0,
            }}
          >
            Contact Me
          </motion.h2>
        </Button>
      </Link>

      <motion.div
        className='media'
        transition={{ duration: 2 }}
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
      >
        <IconButton>
          <a
            href='https://facebook.com/Ezzywealth'
            target='_blank'
            rel='noreferrer'
          >
            <FacebookIcon className='content' style={{ color: "#13ed29" }} />
          </a>
        </IconButton>
        <IconButton>
          <a
            href='https://www.twitter.com/EzzyWealth'
            target='_blank'
            rel='noreferrer'
          >
            <TwitterIcon className='content' style={{ color: "#13ed29" }} />
          </a>
        </IconButton>
        <IconButton>
          <a
            href='https://www.linkedin.com/in/ezekiel-udiomuno-b14539150/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon className='content' style={{ color: "#13ed29" }} />
          </a>
        </IconButton>
        <IconButton>
          <a
            href='https://www.github.com/Ezzywealth'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon className='content' style={{ color: "#13ed29" }} />
          </a>
        </IconButton>
      </motion.div>
    </motion.div>
  );
};

export default Home;
