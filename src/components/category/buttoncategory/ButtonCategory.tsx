import React, { ReactNode } from "react";
import style from './buttoncategory.module.scss'
import { useAppDispatch } from "../../../store/hooks/redux";
import { changeFilter } from "../../../store/movie/movieSlice";

interface ButtonCategoryInterface {
    readonly children: ReactNode
    readonly filter?: string
}

export const ButtonCategory: React.FC<ButtonCategoryInterface> = ({ children, filter }) => {

    const dispatch = useAppDispatch()

    const onChangeFilter = () => {
        filter && dispatch(changeFilter(filter))
    }

    return <button onClick={onChangeFilter} className={style.filters__item}>{children}</button>
}