import React from 'react'
import style from './filters.module.scss'
import { ButtonCategory } from '../category/buttoncategory/ButtonCategory'
import { FiltersType } from '../../type/filters'
import { filteringValues } from '../../utils/constants'

export const Filters: React.FC<FiltersType> = ({ filters }) => {
    return <div className={style.filters}>
        {filters.map(filter => (<ButtonCategory filterCurrent={filteringValues[filter]} key={filter}>{filter}</ButtonCategory>))}
    </div>
}