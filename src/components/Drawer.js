import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';
import PrintIcon from '@material-ui/icons/Print';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none'
  },
  icon: {
    color: "#3f51b5",
  },
});

const style = {
  buttonBack: {
    ':active': {
      backgroundColor: '#3f51b5',
    }
  }
}

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,

  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      
    >
      <List>        
        <Link to="/" className={classes.link}>
          <ListItem button className={classes.buttonBack} style={style.buttonBack}>
            <ListItemIcon className={classes.icon}><HomeIcon /></ListItemIcon>
            <ListItemText primary='Beranda' />
          </ListItem>
        </Link>

        <Link to='/surat_masuk_page' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icon}><InboxIcon /></ListItemIcon>
            <ListItemText primary='Surat Masuk' />
          </ListItem>
        </Link>

        <Link to="/surat_keluar_page" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icon}><MailIcon /></ListItemIcon>
            <ListItemText primary='Surat Keluar' />
          </ListItem>
        </Link>

        <Link to="/daftar_surat_page" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icon}><ListIcon /></ListItemIcon>
            <ListItemText primary='Daftar Surat' />
          </ListItem>
        </Link>
        
        <Link to="/cetak_daftar_surat" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icon}><PrintIcon /></ListItemIcon>
            <ListItemText primary='Cetak Daftar Surat' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('left', true)}/>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
