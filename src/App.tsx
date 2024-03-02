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
import { getCartoon } from './store/cartoon/cartoonSlice';
import { Footer } from './components/footer/Footer';
import { getAnime } from './store/anime/animeSlice';

function App() {

  const dispatch = useAppDispatch()


  // надо зaписать данные в localStorage, чтобы израсходавав лимит запросов брать оттуда
  useEffect(() => {
    // dispatch(getMovies(1))
    // dispatch(getSeries(1))
    // dispatch(getCartoon(1))
    dispatch(getAnime(1))
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