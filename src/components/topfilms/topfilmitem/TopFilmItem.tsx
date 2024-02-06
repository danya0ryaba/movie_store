import React from 'react'
import style from './topfilmitem.module.scss'
import topfilm from '../../../assets/img/top_film.png'

export const TopFilmItem = () => {
    return <li className={style.item__film}>
        <img src={topfilm} alt="list top films" />
    </li>
}
