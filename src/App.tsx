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


// выбрать какие-нибудь для фильтрации

// rating.russianFilmCritics      по реутингу российских критиков (ru)
// rating.imdb                    по рейтигу imdb
// top250                         по top250
// fees.russia.value              по сборам в росси
// fees.usa.value                 по сборам в сша
// fees.world.value               по мировым сборам
// rating.filmCritics             по отзывам кинокритиков
// votes.imdb                     по голосам на imdb
// audience.count                 по количество зрителей

function App() {

  const dispatch = useAppDispatch()
  const { filter } = useAppSelector(state => state.movie)

  React.useEffect(() => {
    dispatch(getMovies({ page: 1, filter: filter }))
    // dispatch(getSeries(1))
    // dispatch(getCartoon(1))
    // dispatch(getAnime(1))
  }, [dispatch, filter])

  console.log(filter);


  // при подгрузке фильмов грузятся с страрым сосотояние filter

  // + как-то оптимизировать загрузку изображения на карточки с фильмами

  // что-то с footer придумать

  // есть хук useDebounce, но я его не использую

  // написать авторизацию https://www.youtube.com/watch?v=ivtbRBEjLW8

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