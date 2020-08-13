import React from 'react';

import Header from './components/Layout/Header';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import FavoritesBags from './pages/Account/FavoritesBags';

import './css/styles.scss';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <FavoritesBags/>
      <Footer/>
    </>
  );
}

export default App;
