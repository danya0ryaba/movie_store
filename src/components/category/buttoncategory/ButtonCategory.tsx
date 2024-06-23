import React from "react";
import style from './buttoncategory.module.scss'
import { motion } from "framer-motion";

const buttonAnimation = {
    hidden: {
        y: 120,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}

interface ButtonCategoryInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly children: React.ReactNode
    readonly filterValue: string
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

export const MButtonCategory = React.forwardRef<HTMLButtonElement, ButtonCategoryInterface>((
    { children,
        filterValue,
        currentFilter,
        onChangeFilter
    },
    ref) => {
    return <motion.button variants={buttonAnimation} ref={ref} onClick={() => onChangeFilter(filterValue)}
        className={currentFilter === filterValue ? `${style.filters__item_active}` : style.filters__item}>
        {children}
    </motion.button>
})