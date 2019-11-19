import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10, 50),
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
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} boxShadow={3} bgcolor="background.paper">
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


  );
}
