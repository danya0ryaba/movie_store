import React from 'react'
import style from './popularfilm.module.scss'
import { BackdropAndPoster } from '../../../type/movie'

type PopularFilmType = Pick<BackdropAndPoster, 'previewUrl'>

export const PopularFilm: React.FC<PopularFilmType> = ({ previewUrl }) => {
    return <div className={style.item__film}>
        <img src={previewUrl} alt="popular film" />
    </div>
}
