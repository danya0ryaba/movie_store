import React, { MouseEvent, ReactNode } from "react";
import style from './buttoncategory.module.scss'

interface ButtonCategoryInterface {
    readonly children: ReactNode
}

export const ButtonCategory: React.FC<ButtonCategoryInterface> = ({ children }) => {
    // ПРИДЕТСЯ ПЕРЕПИСАТЬ ВСЮ ЛОГИКУ АКТИВНОЙ КНОПКИ, ПОТОМУ ЧТО ЭТО ЗАЛУПА
    return <button className={style.filters__item}>{children}</button>
}