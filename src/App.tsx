import React from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Error } from './page/Error';
import { CardMovie } from './page/CardMovie';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<CardMovie />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;