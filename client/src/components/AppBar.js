import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from './Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0),
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Drawer />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sistem Informasi Penomoran Surat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}