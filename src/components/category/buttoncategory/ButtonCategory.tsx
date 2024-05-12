import React from "react";
import style from './buttoncategory.module.scss'

interface ButtonCategoryInterface {
    readonly children: React.ReactNode
    readonly filterValue: any
    readonly currentFilter: string
    onChangeFilter: (value: string) => void
}

export const ButtonCategory: React.FC<ButtonCategoryInterface> = ({ children,
    filterValue,
    currentFilter,
    onChangeFilter }) => {

    return <button onClick={() => onChangeFilter(filterValue)}
        className={currentFilter === filterValue ? `${style.filters__item_active}` : style.filters__item}>
        {children}
    </button>
}