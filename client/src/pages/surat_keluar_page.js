import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    width: 600,
    
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(2, 5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
  button: {
   margin: theme.spacing(1),
   width: 500
  },
  typo: {
    fontFamily: 'Roboto',
  },

}));




export default function SuratKeluar() {
  const classes = useStyles();

  return (
    
    <center>
      <Paper className={classes.root} bgcolor="background.paper" >
        <br></br>
      <h3 className={classes.typo}>Input Data Surat Keluar</h3>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic" className={classes.textField} label="Nomor Surat" margin="normal" />
            <TextField id="standard-basic" className={classes.textField} label="Alamat Penerima" margin="normal" />
            <TextField id="standard-basic" className={classes.textField} label="Tanggal" margin="normal" />
            <TextField id="standard-basic" className={classes.textField} label="Perihal" margin="normal" />
            <Button variant="contained" color="primary" className={classes.button}>
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </center>
  );
}


