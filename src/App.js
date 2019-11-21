import React from 'react';
import { Route } from 'react-router-dom';
 
// import Header from './components/Header';
import AppBar from './components/AppBar';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/home_page';
import DaftarSurat from './pages/daftar_surat_page';
import SuratKeluar from './pages/surat_keluar_page';
import SuratMasuk from './pages/surat_masuk_page';
import Cetak from './pages/cetak_daftar_surat';



function App() {
  return (
    <Router>
      <>
        <AppBar />
        <Route exact path="/" component={ HomePage } />
        <Route path="/daftar_surat_page" component={ DaftarSurat } />
        <Route path="/surat_keluar_page" component={ SuratKeluar } />
        <Route path="/surat_masuk_page" component={ SuratMasuk } />
        <Route path="/cetak_daftar_surat" component={ Cetak } />
      </>
    </Router>
  )
};

export default App;
