import React from 'react'
import { Title } from '../components/title/Title'
import { Filters } from '../components/filters/Filters'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import style from './series.module.scss'
import { InputCustom } from '../components/input/InputCustom'
import { SelectCustom } from '../components/select/SelectCustom'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { getMovies } from '../store/movie/movieSlice'
import { Loader } from '../components/loader/Loader'
import { getSearchMovie } from '../store/search/searchSlice'
import { SearchItem } from '../components/search/searchitem/SearchItem'

const filtersMovies = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']

export const Films: React.FC = () => {

    const [touch, setTouch] = React.useState(false)

    const dispatch = useAppDispatch()

    const requestPage = (page: number) => dispatch(getMovies({ page, filter: 'rating.imdb' }))
    const { movies, page, isLoading } = useAppSelector(state => state.movie)

    const { searchMovies } = useAppSelector(state => state.searchMovie)

    const requestSearchName = (name: string) => dispatch(getSearchMovie(name))

    return <div className={style.series}>

        <Title>Лучшие фильмов</Title>

        <Filters filterItem={filtersMovies} />

        <InputCustom touch={touch} setTouch={setTouch} requestSearchName={requestSearchName} />

        {touch && <div className={style.searchFilms}>
            <ul>{searchMovies.map(film => <SearchItem key={film.id} {...film} />)}</ul>
        </div>}

        <div className={style.genres}>
            <SelectCustom title={'Жанры'} option={options} />
        </div>

        {isLoading ? <Loader /> : <>
            {movies.map(film => <Link key={film.id} to={`${film.id}`}>
                <Film  {...film} />
            </Link>)}
        </>}
        <Pagination onRequestHandler={requestPage} page={page} />
    </div>
}