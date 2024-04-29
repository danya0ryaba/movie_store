import React from 'react'
import { Filters } from '../filters/Filters'
import style from './categoryheader.module.scss'
import { FiltersType } from '../../type/filters'

export const CategoryHeader: React.FC<FiltersType> = ({ filters }) => {
    return (
        <div className={style.category__info}>
            <div className={style.text}>
                <h3 className={style.title}>ONLINE STREAMING</h3>
                <h4 className={style.subtitle}>Лучшие Фильмы</h4>
            </div>
            <Filters filters={filters} />
        </div>
    )
}