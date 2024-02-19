import React from 'react'
import style from './filters.module.scss'
import { ButtonCategory } from '../category/buttoncategory/ButtonCategory'
import { SelectCustom } from '../select/SelectCustom'

interface FiltersInterface {
    readonly filterItem: string[]
}
// Сделать астивный фильтр другого цвета от остальных

export const Filters: React.FC<FiltersInterface> = ({ filterItem }) => {
    return <div className={style.filters}>
        <div className={style.container}>

            <div className={style.filters__item}>
                {filterItem.map(filter => (<ButtonCategory key={filter}>{filter}</ButtonCategory>))}
            </div>

        </div>
    </div>
}
