import React from 'react'
import style from './filters.module.scss'
import { MButtonCategory } from '../category/buttoncategory/ButtonCategory'
import { FiltersType } from '../../type/filters'
import { motion } from 'framer-motion'

export const Filters: React.FC<FiltersType> = ({ filtersObject, onChangeFilter, currentFilter }) => {

    const valueFilters = Object.values(filtersObject)

    return <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className={style.filters}>
        {Object.keys(filtersObject).map((filter, i) => <MButtonCategory
            key={filter}
            onChangeFilter={onChangeFilter}
            filterValue={valueFilters[i]}
            currentFilter={currentFilter}>
            {filter}
        </MButtonCategory>)}
    </motion.div>
}