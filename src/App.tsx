import React, { useEffect } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Error } from './page/Error';
import { CardMovie } from './page/CardMovie';
import { Films } from './page/Films';
import { Series } from './page/Series';
import { TvShow } from './page/TvShow';
import { Header } from './components/header/Header';
import { useAppDispatch } from './store/hooks/redux';
import { getMovies } from './store/movie/movieSlice';
import { usersAPI } from './API/api';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
    usersAPI.getSeries().then(res => console.log(res.data.docs))
  }, [dispatch])

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