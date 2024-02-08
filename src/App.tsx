import React, { useEffect } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Error } from './page/Error';
import { CardMovie } from './page/CardMovie';

function App() {

  useEffect(() => {
    fetch('https://api.kinopoisk.dev/v1.4/movie/random', {
      method: "GET",
      headers: {
        "X-API-KEY": "MSHPGE9-G12MQGY-J328FX0-0HC7G9A"
      },
    })
      .then(response => response.json())
      .then(value => console.log(value))
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<CardMovie />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;