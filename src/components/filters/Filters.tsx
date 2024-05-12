import React from 'react'
import style from './filters.module.scss'
import { ButtonCategory } from '../category/buttoncategory/ButtonCategory'
import { FiltersType } from '../../type/filters'

export const Filters: React.FC<FiltersType> = ({ filtersObject, onChangeFilter, currentFilter }) => {

    const valueFilters = Object.values(filtersObject)

    return <div className={style.filters}>
        {Object.keys(filtersObject).map((filter, i) => <ButtonCategory
            key={filter}
            onChangeFilter={onChangeFilter}
            filterValue={valueFilters[i]}
            currentFilter={currentFilter}>
            {filter}
        </ButtonCategory>)}
    </div>
}