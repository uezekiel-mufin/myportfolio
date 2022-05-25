import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState(true);
  console.log(isOpen);
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className='toolbar'>
            <h2>EU.</h2>

            <div
              className='navIcons'
              onClick={() => {
                setOpen(!isOpen);
                setLinks(!links);
              }}
            >
              {isOpen ? (
                <CloseIcon style={{ fontSize: "3rem" }} />
              ) : (
                <MenuIcon style={{ fontSize: "3rem" }} />
              )}
            </div>

            <motion.div className={links ? "links" : "noLinks"}>
              <Link
                to='/'
                onClick={() => {
                  setLinks(true);
                  setOpen(!isOpen);
                }}
                style={{ width: "max-content" }}
              >
                Home
              </Link>
              <Link
                style={{ width: "max-content" }}
                to='/about'
                onClick={() => {
                  setLinks(true);
                  setOpen(!isOpen);
                }}
              >
                About
              </Link>
              <Link
                style={{ width: "max-content" }}
                to='/portfolio'
                onClick={() => {
                  setLinks(true);
                  setOpen(!isOpen);
                }}
              >
                Portfolio
              </Link>
              <Link
                style={{ width: "max-content" }}
                to='/services'
                onClick={() => {
                  setLinks(true);
                  setOpen(!isOpen);
                }}
              >
                Services
              </Link>
              <Link
                style={{ width: "max-content" }}
                to='/contact'
                onClick={() => {
                  setLinks(true);
                  setOpen(!isOpen);
                }}
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
