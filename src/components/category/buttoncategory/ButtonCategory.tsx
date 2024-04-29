import React, { ReactNode } from "react";
import style from './buttoncategory.module.scss'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { changeFilter } from "../../../store/movie/movieSlice";
import { resetLoadingMovie } from "../../../store/movie/loadingMovieSlice";

interface ButtonCategoryInterface {
    readonly children: ReactNode
    readonly filterCurrent?: string
}

export const ButtonCategory: React.FC<ButtonCategoryInterface> = ({ children, filterCurrent }) => {

    const dispatch = useAppDispatch()
    const { filter } = useAppSelector(state => state.movie)

    const onChangeFilter = () => {
        dispatch(resetLoadingMovie())
        filterCurrent && dispatch(changeFilter(filterCurrent))
    }
    return <button onClick={onChangeFilter}
        className={filter === filterCurrent ?
            `${style.filters__item_active}`
            : style.filters__item}>
        {children}
    </button>
}