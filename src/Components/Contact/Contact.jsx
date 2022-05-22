import { TextField, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import "./contact.css";
import data from "./data";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onSubmit",
    criteriaMode: "firstError",
  });
  const [userData, setUserData] = useState({});

  const regForm = (data, e) => {
    e.preventDefault();
    reset();
    setUserData(data);
  };
  console.log(data);
  console.log(userData);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ezzy",
      "template_lf4fnom",
      form.current,
      "vngt2iIdOB55EqdDp"
    );
    e.target.reset();
  };
  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='contact'
      >
        <h3 style={{ color: "", fontSize: "3rem", marginBottom: 0 }}>
          Contact
        </h3>
        <h3
          style={{
            color: "",
            fontSize: "2rem",
            color: "blueviolet",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          I would love to hear from you
        </h3>
        <h3 style={{ color: "", marginBottom: 0, marginTop: 0 }}>
          I'm always open to discussing web development and programming in
          general.
        </h3>
        <div className='media__form'>
          <div>
            {data.map((d, index) => (
              <div key={index} className='social__media'>
                <div className='details' style={{ marginTop: "2rem" }}>
                  {d.icon}
                </div>
                <div className='details'>{d.name}</div>
                <div className='details' style={{ marginBottom: "3rem" }}>
                  <a href={d.link} target='_blank' rel='noreferrer'>
                    Send a message
                  </a>
                </div>
              </div>
            ))}
          </div>

          <form
            className='form'
            ref={form}
            onSubmit={(handleSubmit(regForm), sendEmail)}
          >
            <>
              <TextField
                color='info'
                fullWidth
                id='fullName'
                label='fullName'
                {...register("fullName", {
                  required: "Full Name is required",
                  minLength: 2,
                })}
              />
            </>
            <>
              <TextField
                fullWidth
                id='email'
                label='email'
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "incorrect email",
                  },
                })}
              />
              {errors.Email && <p className='error'>{errors.Email?.message}</p>}
            </>

            <>
              <TextField
                fullWidth
                rows={7}
                id='message'
                label='message'
                multiline
                {...register("message", {
                  required: "Please input your message",
                })}
              />
              {errors.messages && (
                <p className='error'>{errors.messages?.message}</p>
              )}
            </>
            <Button
              size='large'
              variant='contained'
              className='btn'
              type='submit'
            >
              Submit
            </Button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
