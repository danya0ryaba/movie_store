import React from 'react';
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
import { Person } from './page/Person/Person';

function App() {

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getMovies(1))
    dispatch(getSeries(1))
    dispatch(getCartoon(1))
    dispatch(getAnime(1))
  }, [dispatch])

  // написать нормальный инпут для мультиков и сериалов,
  // возможно надо приклуеть выпадающий список к кастомному инпуту (переписать кастомный инпут)

  return (<>
    <Header />

    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='movie' element={<Films />} />
      <Route path='movie/:id' element={<CardMovie />} />

      <Route path='cartoon' element={<Cartoon />} />
      <Route path='cartoon/:id' element={<CardMovie />} />

      <Route path='/series' element={<Series />} />
      <Route path='/series/:id' element={<CardMovie />} />

      <Route path='person/:id' element={<Person />} />

      <Route path='*' element={<Error />} />

    </Routes>

    {/* <Footer /> */}

  </>);
}

export default App;