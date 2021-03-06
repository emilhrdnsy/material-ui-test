import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import DaftarSuratMasuk from '../components/DaftarSuratMasuk';
import DaftarSuratKeluar from '../components/DaftarSuratKeluar';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 10),
    width: '150px', 
    marginLeft: '1100px',
    marginBottom: '70px',
  },
  container: {
    // padding: theme.spacing(10, 100),
    overflowX: 'none',
  },
  link: {
    textDecoration: "none",
  }
}));


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },

})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router >
    <>
      <div className={classes.container}>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
          className={classes.button}
        >
          Pilih Daftar
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          <Link to="/DaftarSuratMasuk" className={classes.link}>
            <StyledMenuItem>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Surat Masuk" />
            </StyledMenuItem>
          </Link>

          <Link to="/DaftarSuratKeluar"  className={classes.link}>
            <StyledMenuItem>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText  primary="Surat Keluar" />
            </StyledMenuItem>
          </Link>
        </StyledMenu>
        <br></br>
        <br></br>
          <Route path="/DaftarSuratMasuk" component={ DaftarSuratMasuk } />
          <Route path="/DaftarSuratKeluar" component={ DaftarSuratKeluar } />
      </div>
    </>
    </Router>
  );
}