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

const filtersMovies = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']

export const Films = () => {

    const dispatch = useAppDispatch()

    const requestPage = (page: number) => {
        dispatch(getMovies(page))
    }

    const { movies, page } = useAppSelector(state => state.movie)

    return <div className={style.series}>
        <Title>Лучшие фильмов</Title>
        <Filters filterItem={filtersMovies} />
        <InputCustom />
        <div className={style.genres}>
            <SelectCustom title={'Жанры'} option={options} />
        </div>

        {movies.map(film => <Link key={film.id} to={`${film.id}`}>
            <Film  {...film} />
        </Link>)}

        <Pagination onRequestHandler={requestPage} page={page} />

    </div>
}
