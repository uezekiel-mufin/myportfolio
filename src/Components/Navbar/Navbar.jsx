import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className='toolbar'>
            <h2>EU.</h2>

            <div className='navIcons'>
              {clicked ? <MenuIcon /> : <CloseIcon />}
            </div>
            <div className='links'>
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
