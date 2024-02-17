import React from 'react'
import style from './filters.module.scss'
import { ButtonCategory } from '../category/buttoncategory/ButtonCategory'
import { SelectCustom } from '../select/SelectCustom'

const arrayCountry = ['Все страны', 'США', 'Россия', 'Франция', 'Италия']
const arrayFilters = ['Фильмы', 'С высоким рейтингом', 'Сериалы', 'Годы', 'Жанры']

export const Filters = () => {
    return <div className={style.filters}>
        <div className={style.container}>

            <div className={style.filters__item}>
                {arrayFilters.map(filter => (<ButtonCategory key={filter}>{filter}</ButtonCategory>))}
            </div>

        </div>
    </div>
}
