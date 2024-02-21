import React from 'react'
import style from './moviecard.module.scss'
import poster from '../../assets/img/poster_film.png'
import clock from '../../assets/img/clock.png'
import star from '../../assets/img/star.png'
import { Movie } from '../../type/movie'

export const MovieCard: React.FC<Movie> = ({
    status,
    rating,
    votes,
    backdrop,
    movieLength,
    id,
    type,
    name,
    description,
    year,
    poster,
    genres,
    countries,
    typeNumber,
    alternativeName,
    enName,
    names,
    ratingMpaa,
    shortDescription,
    ticketsOnSale,
    ageRating,
    logo,
    top10,
    top250,
    isSeries,
    seriesLength,
    totalSeriesLength
}) => {
    return <div className={style.category__films_item}>

        <div className={style.item_film}>

            <img src={`${poster.previewUrl}`} className={style.poster} alt="poster films" />

            <div className={style.item_film_info}>

                <div className={style.info}>
                    <h5 className={style.film__name}>{name}</h5>

                    <span className={style.film__date}>{year}</span>
                </div>

                <div className={style.item__info}>

                    <span className={style.quality}>HD</span>

                    <div className={style.duration}>
                        <img src={clock} alt="duration current film" className={style.duration__current_film} />
                        <span>{movieLength} min</span>
                    </div>

                    <div className={style.rating}>
                        <img src={star} alt="star" className={style.star} />
                        <span className={style.rating__value}>{rating.imdb}</span>
                    </div>

                </div>

            </div>

        </div>

    </div>
}
