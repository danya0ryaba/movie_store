import React from 'react'
import style from './filters.module.scss'
import { ButtonCategory } from '../category/buttoncategory/ButtonCategory'
import { FiltersType } from '../../type/filters'

export const Filters: React.FC<FiltersType> = ({ filters }) => {

    const filtersArray = Object.keys(filters)

    return <div className={style.filters}>
        {filtersArray.map(filter => <ButtonCategory key={filter}
            filterCurrent={filters[filter]}>
            {filter}
        </ButtonCategory>)}
    </div>
}