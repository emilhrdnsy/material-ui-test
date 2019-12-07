import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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


export default function SuratMasuk() {
  React.useEffect(() => {
    axios.get('http://localhost:5000/getLast')
      .then(res => {
        setMail({ number: res.data+1 })
      })
  }, [])

  const classes = useStyles();
  const [mail, setMail] = React.useState({
    nomor_surat: 1,
    alamat_penerima: '',
    tanggal: '',
    perihal: ''
  });

  const handleChange = alamat_penerima => event => {
    setMail({ ...mail, [alamat_penerima]: event.target.value });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/', mail)
      .then(res => console.log(res.data))
  }

  return (
    <center>
      <Paper className={classes.root} bgcolor="background.paper">
        <br></br>
        <h3 className={classes.typo}>Input Data Surat Masuk</h3>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic" className={classes.textField} label="Nomor Surat" margin="normal" value={mail.nomor_surat} />
            <TextField id="standard-basic" className={classes.textField} label="Alamat Penerima" margin="normal" onChange={handleChange('alamat_penerima')} />
            <TextField id="standard-basic" className={classes.textField} label="Tanggal" margin="normal" onChange={handleChange('tanggal')} />
            <TextField id="standard-basic" className={classes.textField} label="Perihal" margin="normal" onChange={handleChange('perihal')} />
            <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.button}>
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </center>
  );
}
