import React from 'react'
import { InputCustom } from '../components/input/InputCustom'
import { Filters } from '../components/filters/Filters'
import { Title } from '../components/title/Title'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import { SelectCustom } from '../components/select/SelectCustom'
import style from './series.module.scss'
import { Link } from 'react-router-dom'

const filterSeries = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']
let bestFilms: number[] = []

for (let i = 1; i < 11; i++) {
    bestFilms.push(i)
}

export const Series = () => {

    return <div className={style.series}>
        <Title>Лучшие сериалы всех времен</Title>
        <Filters filterItem={filterSeries} />
        <InputCustom />
        <div className={style.genres}>
            <SelectCustom title={'Жанры'} option={options} />
        </div>
        {bestFilms.map(film => <Link key={film} to={`909`}>
            <Film />
        </Link>)}
        <Pagination />
    </div>
}
