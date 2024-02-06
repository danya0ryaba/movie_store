import React from 'react'
import style from './popularfilm.module.scss'
import film from '../../../assets/img/popular_film.png'

export const PopularFilm = () => {
    return <div className={style.item__film}>
        <img src={film} alt="popular film" />
    </div>
}
