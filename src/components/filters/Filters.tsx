import React from 'react'
import style from './filters.module.scss'
import { ButtonCategory } from '../category/buttoncategory/ButtonCategory'

interface FiltersInterface {
    readonly filterItem: string[]
}

export const Filters: React.FC<FiltersInterface> = ({ filterItem }) => {
    return <div className={style.filters}>
        {filterItem.map(filter => (<ButtonCategory key={filter}>{filter}</ButtonCategory>))}
    </div>
}