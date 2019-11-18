import React from 'react';
import { AppBar, Toolbar, IconButton,  } from '@material-ui/core';
import Drawer from './Drawer.js';


function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Drawer />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
