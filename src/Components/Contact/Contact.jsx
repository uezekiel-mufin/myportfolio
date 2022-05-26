import { TextField, Button, Input, InputLabel } from "@mui/material";
import React, { useState, useRef } from "react";
import "./contact.css";
import data from "./data";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { StyledEngineProvider, styled } from "@mui/material/styles";

const Contact = () => {
  const StyledTextField = styled(TextField)({
    "& label": {
      color: "white",
    },
    "& input  ": {
      color: "black",
      fontSize: "14px",
      fontWeight: "bold",
    },

    "& hover label": {
      fontWeight: 700,
    },

    "& .MuiInputBase-inputMultiline": {
      color: "black",
      fontSize: "14px",
      fontWeight: "bold",
    },
  });
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
            fontSize: "2rem",
            color: "blueviolet",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          I would love to hear from you
        </h3>
        <h3
          style={{
            marginBottom: 0,
            marginTop: 0,
            color: "#EDD9FC",
            fontSize: "14px",
            fontWeight: 100,
          }}
        >
          I'm always open to discussing web development and programming in
          general.
        </h3>
        <div className='media__form'>
          <div>
            {data.map((d, index) => (
              <div key={index} className='social__media'>
                <div
                  className='details'
                  style={{ marginTop: "2rem", fontWeight: 700 }}
                >
                  {d.icon}
                </div>
                <div className='details'>{d.name}</div>
                <div className='details' style={{ marginBottom: "3rem" }}>
                  <a
                    href={d.link}
                    target='_blank'
                    rel='noreferrer'
                    style={{
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#EEEEEE",
                    }}
                  >
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
            <InputLabel
              htmlFor='fullName'
              style={{
                color: "white",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              FullName
            </InputLabel>
            <StyledTextField
              margin='normal'
              type='text'
              sx={{
                borderColor: "white",
                marginTop: "0px",
                backgroundColor: "white",
                border: "none",
              }}
              fullWidth
              id='fullName'
              {...register("fullName", {
                required: "Full Name is required",
                minLength: 2,
              })}
            />

            <>
              <InputLabel
                htmlFor='email'
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                Email
              </InputLabel>
              <StyledTextField
                margin='normal'
                style={{
                  marginTop: "0px",
                  backgroundColor: "white",
                  border: "none",
                }}
                type='text'
                fullWidth
                id='email'
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
              <InputLabel
                htmlFor='message'
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                Message
              </InputLabel>
              <StyledTextField
                margin='normal'
                multiline
                style={{
                  marginTop: "0px",
                  fontWeight: 300,
                  fontSize: "16px",
                  backgroundColor: "white",
                  bordeRadius: "1rem",
                }}
                type='text'
                fullWidth
                rows={7}
                id='message'
                // rows={4}
                // maxRows={6}
                // multiline
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
              color='secondary'
              variant='contained'
              className='btn'
              type='submit'
              // color='secondary'
              style={{ marginBottom: "3rem", fontSize: "2rem" }}
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
