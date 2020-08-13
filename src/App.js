import React from 'react';

import Header from './components/Layout/Header';
import Navbar from './components/Layout/Navbar';

import FavoritesBags from './pages/Account/FavoritesBags';

import './css/styles.scss';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <FavoritesBags/>
    </>
  );
}

export default App;
