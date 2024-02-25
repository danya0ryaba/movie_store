import React, { useEffect } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Error } from './page/Error';
import { CardMovie } from './page/CardMovie';
import { Films } from './page/Films';
import { Series } from './page/Series';
import { Cartoon } from './page/Cartoon';
import { Header } from './components/header/Header';
import { useAppDispatch } from './store/hooks/redux';
import { getMovies } from './store/movie/movieSlice';
import { getSeries } from './store/series/seriesSlice';
import { usersAPI } from './API/api';
import { getCartoon } from './store/cartoon/cartoonSlice';
import { Footer } from './components/footer/Footer';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getSeries())
    dispatch(getCartoon())
  }, [dispatch])

  return (<>
    <Header />

    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='movie' element={<Films />} />
      <Route path='movie/:id' element={<CardMovie />} />

      <Route path='tv' element={<Cartoon />} />
      <Route path='tv/:id' element={<CardMovie />} />

      <Route path='/series' element={<Series />} />
      <Route path='/series/:id' element={<CardMovie />} />

      <Route path='*' element={<Error />} />
    </Routes>


    {/* НА cARDmOVIE ПРОБЛЕМЫ С ОТОБРАЖЕНИЕМ FOOTER */}
    {/* <Footer /> */}

  </>);
}

export default App;