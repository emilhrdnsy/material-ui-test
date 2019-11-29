const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 5000
const sipsRouters = express.Router()

let Sips = require('./SipsDBModel')

app.use(cors())
app.use(bodyParser.json())
app.use('/'. Routers)

mongoose.connect('mongodb://127.0.0.1:27017/sips1tables', { useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', function() {
  console.log('MongoDB connection successfully')
})

app.listen(PORT, function(){
  console.log('Server running on port ' + PORT)
})

sipsRouters.route('/').post(function(req, res){
  let mails = new SipsDB(req.body)
  mails.save()
    .then(todo => {
      res.status(200).json({'mail': 'mail added successfully'})
    })
    .catch(err => {
      res.status(400).send('failed adding mail')
    })
})

sipsRouters.route('/list').get(function(req, res) {
  Sips.find(function(err, mails) {
    if (err) {
      console.log(err)
    } else (
      res.json(mails)
    )
  })
})

sipsRouters.route('/edit/:id').get((req, res) => {
  Sips.findById(req.params.id)
  .then(() => {
    res.status(200).json(todo);
  })
  .catch(err => {
    res.status(400).send('failed get mail')
  })
})

sipsRouters.route('/delete/:id').post((req, res) => {
  Sips.findByIdAndDelete(req.body._id)
  .then(() => {
    res.status(200).json('Mail deleted')
  })
  .catch(err => {
    res.status(400).send('Failed delete mail')
  })
})

sipsRouters.route('/update/:id').post(function(req, res) {
  const{
    nomor_surat,
    alamat_penerima,
    tanggal,
    perihal
  } = req.body;

  Sips.updateOne({ 'nomor_surat': number } , {$set: {alamat_penerima, tanggal, perihal}})
    .then(todo => {
      res.status(200).json({'mail': 'mail edit successfully'})
    })
    .catch(err => {
      res.status(400).send('failed adding mail')
    })
  })

  // get last index
  sipsRouters.route('/getLast').get(function(req, res) {
    Sips.find(function(err, mails) {
      if (err) {
        console.log(err)
      } else {
        res.json(mails[0].nomor_surat)
      }
    }).sort({'nomor_surat': -1}).limit(1)
})

