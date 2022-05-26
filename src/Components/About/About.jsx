import { Box, Button, Grid } from "@material-ui/core";
import React from "react";
import "./about.css";

import Suit from "../../assests/headphonepic.jpg";
import { motion } from "framer-motion";
import CV from "../../assests/Ezekiel_Udiomuno_CV.pdf";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='about'
      >
        <Box style={{ margin: "2rem", background: "rgba(0,0,0,0.5)" }}>
          <h6 style={{ fontSize: "3rem" }}>About</h6>
          <h4>A brief intro about me</h4>

          <Grid container style={{ width: "100%" }} spacing={2}>
            <Grid item xs={12} md={6}>
              <div className='image'>
                <img src={Suit} alt='Ezekiel' />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>
                I'm a FRONT END WEB Developer who loves to make things look
                perfect. I create pixel perfect Websites that are responsive on
                all screensizes (small, big and Extra large screen sizes) and
                that are scalable. I'm also a Mechanical Engineer. I love
                learning new things and quickly too. And I love to code.
              </p>
              <p>
                I have a Degree in Mechanical Engineering from the great
                University of Benin. I'm a self taught Front-End Developer with
                sound knowledge on Front-End Web technologies. I have sound
                knowledge on REACTJS, MATERIAL-UI, HTML5, CSS3, SASS,
                JAVASCRIPT, EmailJS, ParticleJS, GITHUB, GITHUB ACTIONS and
                more. Click to view my Portfolio
              </p>
              <div className='button'>
                <Button variant='contained' href={CV} download color='primary'>
                  <motion.h3
                    transition={{ duration: 3 }}
                    initial={{ y: 1000 }}
                    animate={{ y: 0, scale: 1.3 }}
                  >
                    Download CV
                  </motion.h3>
                </Button>
                <Link to='/contact'>
                  <Button variant='contained' color='secondary'>
                    <motion.h3
                      transition={{ duration: 3 }}
                      initial={{ y: 1000 }}
                      animate={{ y: 0, scale: 1.3 }}
                    >
                      Hire Me
                    </motion.h3>
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default About;
