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
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { getMovies } from './store/movie/movieSlice';
import { getSeries } from './store/series/seriesSlice';
import { getCartoon } from './store/cartoon/cartoonSlice';
import { Footer } from './components/footer/Footer';
import { getAnime } from './store/anime/animeSlice';
import { Person } from './page/Person/Person';
import { Auth } from './page/Auth/Auth';
import { auth } from './firebase';
import { setAuth } from './store/auth/authSlice';

// НАДО КАК-ТО ПЕРЕПИСАТЬ ФИЛТРАЦИЮ, А ТО ЭТО КАКАЯ-ТО ЗАЛУПА

function App() {

  // console.log('render App');

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (auth.currentUser?.email && auth.currentUser?.uid) {
      dispatch(setAuth({
        email: auth.currentUser.email,
        token: 'допустим есть',
        id: auth.currentUser?.uid,
      }))
    }
    dispatch(getSeries({ page: 1, filter: "votes.imdb" }))
    // dispatch(getCartoon(1))
    // dispatch(getAnime(1))
  }, [dispatch])

  // ГЛАВНАЯ ПРОБЛЕМА ЭТО ПАГИНАЦИЯ ПРИ ИЗМЕНЕНИИ ФИЛЬТРА

  // добавить побольше фильтров на страницу фильмы
  // что-то с footer придумать

  // написать анимацию для всего (через библиотеки)
  // в конце сделать lazy loading
  // оптимизировать все (memo? useMeme? useCallback?)

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

      <Route path='auth' element={<Auth />} />

      <Route path='*' element={<Error />} />

    </Routes>

    {/* <Footer /> */}

  </>);
}

export default App;