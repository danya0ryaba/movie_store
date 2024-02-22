import React, { useEffect } from 'react'
import { Title } from '../components/title/Title'
import { Filters } from '../components/filters/Filters'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import style from './series.module.scss'
import { InputCustom } from '../components/input/InputCustom'
import { SelectCustom } from '../components/select/SelectCustom'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks/redux'

const filtersMovies = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']

export const Films = () => {

    const { list } = useAppSelector(state => state.movie)

    return <div className={style.series}>
        <Title>Лучшие фильмов</Title>
        <Filters filterItem={filtersMovies} />
        <InputCustom />
        <div className={style.genres}>
            <SelectCustom title={'Жанры'} option={options} />
        </div>

        {list.map(film => <Link key={film.id} to={`${film.id}`}>
            <Film  {...film} />
        </Link>)}

        <Pagination />

    </div>
}
