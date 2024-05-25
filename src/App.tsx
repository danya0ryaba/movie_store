import React, { Suspense, lazy } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { CardMovie } from './page/CardMovie';
import { Header } from './components/header/Header';
import { useAppDispatch } from './store/hooks/redux';
import { getSeries } from './store/series/seriesSlice';
import { Footer } from './components/footer/Footer';
import { getAnime } from './store/anime/animeSlice';
import { auth } from './firebase';
import { setAuth } from './store/auth/authSlice';
import { Loader } from './components/loader/Loader';

const Home = lazy(() => import("./page/Home"))
const Films = lazy(() => import("./page/Films"))
const Cartoon = lazy(() => import("./page/Cartoon"))
const Series = lazy(() => import("./page/Series"))
const Person = lazy(() => import("./page/Person/Person"))
const Auth = lazy(() => import("./page/Auth/Auth"))
const Error = lazy(() => import("./page/Error"))

function App() {

  const dispatch = useAppDispatch()

  React.useEffect(() => {

    if (auth.currentUser?.email && auth.currentUser?.uid) {
      dispatch(setAuth({
        email: auth.currentUser.email,
        token: 'допустим есть',
        id: auth.currentUser?.uid,
      }))
    }
    dispatch(getAnime(1))
    dispatch(getSeries({ page: 1, filter: "votes.imdb" }))
  }, [dispatch])

  // скачать все картинки для фонов и загружать локально
  // auth записать в localStorage, а осталбное в sessionStorage
  // Верстка на Pagination
  // ГЛАВНАЯ ПРОБЛЕМА ЭТО ПАГИНАЦИЯ ПРИ ИЗМЕНЕНИИ ФИЛЬТРА
  // типизацию (убрать any)

  return (<>

    <Header />

    <Routes>

      <Route path='/' element={<Suspense fallback={<Loader />}><Home /></Suspense>} />

      <Route path='movie' element={<Suspense fallback={<Loader />}><Films /></Suspense>} />
      <Route path='movie/:id' element={<CardMovie />} />

      <Route path='cartoon' element={<Suspense fallback={<Loader />}><Cartoon /></Suspense>} />
      <Route path='cartoon/:id' element={<CardMovie />} />

      <Route path='/series' element={<Suspense fallback={<Loader />}><Series /></Suspense>} />
      <Route path='/series/:id' element={<CardMovie />} />

      <Route path='person/:id' element={<Suspense fallback={<Loader />}><Person /></Suspense>} />

      <Route path='auth' element={<Suspense fallback={<Loader />}><Auth /></Suspense>} />

      <Route path='*' element={<Suspense fallback={<Loader />}><Error /></Suspense>} />

    </Routes>

    <Footer />

  </>);
}

export default App;