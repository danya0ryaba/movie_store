import React, { Suspense, lazy } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { CardMovie } from './page/CardMovie';
import { Header } from './components/header/Header';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { getSeries } from './store/series/seriesSlice';
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

// закинуть ключ от api в env.local

function App() {

  const dispatch = useAppDispatch()
  // I write down anime the in a sessionStorage
  const { anime } = useAppSelector(state => state.anime)
  sessionStorage.setItem("anime", JSON.stringify(anime))
  const sessionStorageAnime = sessionStorage.getItem("anime");
  // I write down series the in a sessionStorage
  const { series } = useAppSelector(state => state.series)
  sessionStorage.setItem("series", JSON.stringify(series))
  const sessionStorageSeries = sessionStorage.getItem("series")

  React.useEffect(() => {

    if (auth.currentUser?.email && auth.currentUser?.uid) {
      dispatch(setAuth({
        email: auth.currentUser.email,
        token: 'допустим есть',
        id: auth.currentUser?.uid,
      }))
    }

    if (JSON.parse(sessionStorageAnime!).length === 0) {
      dispatch(getAnime(1))
    }

    if (JSON.parse(sessionStorageSeries!).length === 0) {
      dispatch(getSeries({ page: 1, filter: "votes.imdb" }))
    }
  }, [dispatch, sessionStorageAnime, sessionStorageSeries])

  return (<div className='wrapper'>

    <Header />

    <main className="wrapper_main">
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
    </main>

  </div>);
}

export default App;