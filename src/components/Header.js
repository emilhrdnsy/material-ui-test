import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">

        <Link color="primary" href="/" onClick={handleClick} className={classes.link}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>

        <Link
          color="primary"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <InboxIcon className={classes.icon} />
          Surat Masuk
        </Link>

        <Link
          color="primary"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <MailIcon className={classes.icon} />
          Surat Keluar
        </Link>

        <Link
          color="primary"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <ListIcon className={classes.icon} />
          Daftar Surat
        </Link>


      </Breadcrumbs>
    </Paper>
  );
}
