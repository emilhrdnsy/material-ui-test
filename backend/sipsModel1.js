const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inbox = new Schema({
  nomor_surat: {
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

module.exports = mongoose.model('inboxs', inbox)