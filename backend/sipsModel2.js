const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sent = new Schema({
  number: {
    type: Number
  },
  alamat_penerima: {
    type: String
  },
  tanggal: {
    type: Date
  },
  perihal: {
    type: String
  }
})

module.exports = mongoose.model('sents', sent)