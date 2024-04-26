import React from 'react'
import style from './moviecard.module.scss'
import clock from '../../assets/img/clock.png'
import star from '../../assets/img/star.png'
import { Movie } from '../../type/movie'

export const MovieCard: React.FC<Movie> = (props) => {
    return <div className={style.category__films_item}>

        <div className={style.item_film}>

            <img src={`${props.poster?.url || props.poster?.previewUrl || false}`} className={style.poster} alt="poster films" />

            <div className={style.item_film_info}>

                <div className={style.info}>
                    <h5 className={style.film__name}>{props.name}</h5>
                    <span className={style.film__date}>{props.year}</span>
                </div>

                <div className={style.item__info}>
                    <span className={style.quality}>HD</span>
                    <div className={style.duration}>
                        <img src={clock} alt="duration current film" className={style.duration__current_film} />
                        <span>{props.movieLength} min</span>
                    </div>
                    <div className={style.rating}>
                        <img src={star} alt="star" className={style.star} />
                        <span className={style.rating__value}>{props.rating.imdb}</span>
                    </div>
                </div>

            </div>

        </div>

    </div>
}
