import React from 'react'
import style from './topfilmitem.module.scss'


type PreviewPosterType = {
    poster: string | undefined
}


export const TopFilmItem: React.FC<PreviewPosterType> = ({ poster }) => {
    return <li className={style.item__film}>
        <img src={poster} alt="list top films" />
    </li>
}
