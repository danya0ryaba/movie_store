import React, { useEffect } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Error } from './page/Error';
import { CardMovie } from './page/CardMovie';
import { usersAPI } from './API/api';
import { Films } from './page/Films';
import { Series } from './page/Series';
import { TvShow } from './page/TvShow';
import { Header } from './components/header/Header';

function App() {

  // let serials = []

  // useEffect(() => {
  //   usersAPI.getSeason().then(res => console.log(res.data.docs))
  // }, [])

  return (<>
    <Header />

    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='movie' element={<Films />} />
      <Route path='movie/:id' element={<CardMovie />} />

      <Route path='tv' element={<TvShow />} />
      <Route path='tv/:id' element={<CardMovie />} />

      <Route path='/series' element={<Series />} />
      <Route path='/series/:id' element={<CardMovie />} />

      <Route path='*' element={<Error />} />
    </Routes>

  </>);
}

export default App;