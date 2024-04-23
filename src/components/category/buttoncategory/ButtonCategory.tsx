import React, { MouseEvent, ReactNode } from "react";
import style from './buttoncategory.module.scss'

interface ButtonCategoryInterface {
    readonly children: ReactNode
}

export const ButtonCategory: React.FC<ButtonCategoryInterface> = ({ children }) => {
    return <button className={style.filters__item}>{children}</button>
}