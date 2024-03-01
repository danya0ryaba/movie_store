import React from 'react'
import { InputCustom } from '../components/input/InputCustom'
import { Filters } from '../components/filters/Filters'
import { Title } from '../components/title/Title'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import { SelectCustom } from '../components/select/SelectCustom'
import style from './series.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { getSeries } from '../store/series/seriesSlice'

const filterSeries = ['С высоким рейтингом', 'Российские', 'Зарубежные']
const options = ['Биография', 'Аниме', 'Боевики', 'Детективы', 'Документальные', 'Драмы']

export const Series = () => {

    const { series, isLoading, page } = useAppSelector(state => state.series);

    const dispatch = useAppDispatch()

    const requestPageSeries = (page: number) => dispatch(getSeries(page))

    return isLoading ? <h2>Loading</h2> :
        <div className={style.series}>
            <Title>Лучшие сериалы</Title>
            <Filters filterItem={filterSeries} />
            <InputCustom />
            <div className={style.genres}>
                <SelectCustom title={'Жанры'} option={options} />
            </div>

            {series.map(s => <Link key={s.id} to={`${s.id}`}>
                <Film {...s} />
            </Link>)}

            <Pagination page={page} onRequestHandler={requestPageSeries} />
        </div>
}
