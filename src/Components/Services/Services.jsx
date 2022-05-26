import { Grid } from "@mui/material";
import React from "react";
import serviceList from "./web";
import "./services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='services'
    >
      <h3
        style={{
          fontSize: "3rem",
          marginTop: "2rem",
          marginBottom: 0,
          color: "#0a72f0",
          fontWeight: 700,
        }}
      >
        Services
      </h3>
      <h3
        style={{
          fontSize: "3rem",
          marginTop: 0,
          marginBottom: 0,
          fontWeight: 700,
        }}
      >
        What I can do for you
      </h3>
      <h3
        style={{
          fontSize: "1.5rem",
          marginTop: 0,
        }}
      >
        Skills and offer
      </h3>

      <div className='grid'>
        <Grid
          container
          display='flex'
          flexDirection='row'
          style={{ margin: 0, padding: "3rem" }}
        >
          {serviceList.map((service, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={5}
              md={3}
              style={{
                background: "rgba(0,0,0,0.4)",
                margin: "1rem",
                rowGap: "2rem",
                // padding: "1rem",
                borderRadius: "2rem",
              }}
            >
              <h3
                className='service__img'
                style={{ marginBottom: 0, marginTop: "1rem" }}
              >
                {service.image}
              </h3>
              <h3
                className='service__skill'
                style={{ marginTop: 0, fontWeight: 500, fontSize: "2rem" }}
              >
                {service.skill}
              </h3>
              <h3
                style={{
                  color: "#EEEEEE",
                  marginRight: "3rem",
                  marginLeft: "3rem",
                  fontSize: "14px",
                }}
                className='service__description'
              >
                {service.description}
              </h3>
            </Grid>
          ))}
        </Grid>
      </div>
    </motion.div>
  );
};

export default Services;
