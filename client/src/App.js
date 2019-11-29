import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import { BrowserRouter as Router } from 'react-router-dom';

import DaftarSurat from './pages/daftar_surat_page';
import SuratKeluar from './pages/surat_keluar_page';
import SuratMasuk from './pages/surat_masuk_page';
import Cetak from './pages/cetak_daftar_surat';



function App() {
  return (
    <Router>
      <>
        <AppBar />
        <Route exact path="/" component={ SuratMasuk } />
        <Route path="/surat_keluar_page" component={ SuratKeluar } />
        <Route path="/daftar_surat_page" component={ DaftarSurat } />
        <Route path="/cetak_daftar_surat" component={ Cetak } />
      </>
    </Router>
  )
};

export default App;
