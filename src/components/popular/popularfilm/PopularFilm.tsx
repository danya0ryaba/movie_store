import React from 'react'
import style from './popularfilm.module.scss'
import film from '../../../assets/img/popular_film.png'
import { Movie } from '../../../type/movie'

export const PopularFilm: React.FC<Movie> = (cartoon) => {
    return <div className={style.item__film}>
        <img src={cartoon.poster.previewUrl} alt="popular film" />
    </div>
}
