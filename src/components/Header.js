import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';
import PrintIcon from '@material-ui/icons/Print';

import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
    color: '#3f51b5'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));


export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
       
        <Link color="#3f51b5" to="/" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Beranda
        </Link>
       
        <Link color="#3f51b5" to="/surat_masuk_page/" className={classes.link}>
          <InboxIcon className={classes.icon} />
          Surat Masuk
        </Link>
    
        <Link color="#3f51b5" to="/surat_keluar_page/" className={classes.link}>
          <MailIcon className={classes.icon} />
          Surat Keluar
        </Link>

        <Link color="#3f51b5" to="/daftar_surat_page/" className={classes.link}>
          <ListIcon className={classes.icon} />
          Daftar Surat
        </Link>

        <Link color="#3f51b5" to="/cetak_daftar_surat/" className={classes.link}>
          <PrintIcon className={classes.icon} />
          Cetak Daftar Surat
        </Link>
      </Breadcrumbs>
    </Paper>
  );
}