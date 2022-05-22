import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

            <div className='navIcons'>
              {isOpen ? (
                <CloseIcon
                  style={{ fontSize: "3rem" }}
                  onClick={() => {
                    setOpen(!isOpen);
                    setLinks(!links);
                  }}
                />
              ) : (
                <MenuIcon
                  style={{ fontSize: "3rem" }}
                  onClick={() => {
                    setOpen(!isOpen);
                    setLinks(!links);
                  }}
                />
              )}
            </div>

            <div className={links ? "links" : "noLinks"}>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/portfolio'>Portfolio</Link>
              <Link to='/services'>Services</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
