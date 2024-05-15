import React from 'react'
import style from './searchitem.module.scss'
import { Movie } from '../../../type/movie'
import { Link } from 'react-router-dom'

export const SearchItem: React.FC<Movie> = (props) => {

    return <Link to={`${props.id}`} className={style.item}>
        <div className={style.info__poster}>
            <img src={props.poster?.previewUrl} alt="poster" className={style.poster} />
            <div className={style.desc}>{props.shortDescription ? props.shortDescription : 'описание отсутствует'}</div>
        </div>

        <div className={style.info__film}>
            <span className={style.name}>{props.name}</span>
            <span className={style.rating}>рейтинг: {props.rating.imdb}</span>
            <span className={style.year}><b>год:</b> {props.year}</span>
        </div>
    </Link>
}