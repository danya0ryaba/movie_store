import React from 'react'
import { Title } from '../components/title/Title'
import { Filters } from '../components/filters/Filters'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import style from './series.module.scss'
import { InputCustom } from '../components/input/InputCustom'
import { SelectCustom } from '../components/select/SelectCustom'
import { Link } from 'react-router-dom'

let bestFilms: number[] = []
for (let i = 0; i < 10; i++) {
    bestFilms.push(i)
}

const filtersMovies = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']

export const Films = () => {

    return <div className={style.series}>
        <Title>250 лучших фильмов</Title>
        <Filters filterItem={filtersMovies} />
        <InputCustom />
        <div className={style.genres}>
            <SelectCustom title={'Жанры'} option={options} />
        </div>

        {bestFilms.map(film => <Link key={film} to={`456`}>
            <Film key={film} />
        </Link>)}


        <Pagination />
    </div>
}
