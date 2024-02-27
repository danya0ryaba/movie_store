import React from 'react'
import { InputCustom } from '../components/input/InputCustom'
import { Filters } from '../components/filters/Filters'
import { Title } from '../components/title/Title'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import { SelectCustom } from '../components/select/SelectCustom'
import style from './series.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks/redux'
import { Footer } from '../components/footer/Footer'

const filterSeries = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']




export const Series = () => {

    const { series } = useAppSelector(state => state.series);
    console.log(series);

    return <div className={style.series}>
        <Title>Лучшие сериалы</Title>
        <Filters filterItem={filterSeries} />
        <InputCustom />
        <div className={style.genres}>
            <SelectCustom title={'Жанры'} option={options} />
        </div>

        {series.map(s => <Link key={s.id} to={`${s.id}`}>
            <Film {...s} />
        </Link>)}

        <Pagination />
    </div>
}
