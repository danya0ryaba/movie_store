import React from 'react'
import style from './film.module.scss'
import camera from '../../assets/img/camera.png'
import { Movie } from '../../type/movie'



export const Film: React.FC<Movie> = ({
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

    return <div className={style.card__film}>

        <div className={style.container}>

            <div className={style.card}>

                <div className={style.card__info}>

                    <span className={style.number}>1</span>

                    <div className={style.poster}>
                        <img src={`${poster.previewUrl}`} alt="poster" />
                    </div>

                    <div className={style.info}>
                        <h4 className={style.title}>{name}<br />{alternativeName}</h4>
                        <span className={style.aboutFilm}>
                            {countries[0].name} ({genres.map(i => `${i.name} `)}) {year}
                        </span>
                        <button className={style.trailer}>
                            <img className={style.camera} src={camera} alt="camera" />
                            <span>Трейлер</span>
                        </button>
                    </div>
                </div>

                <div className={style.card__rating}>

                    <span className={style.rating__value}>{rating.imdb}</span>

                    <span className={style.view}>{ageRating}+</span>

                    <button className={style.view_btn}>Буду смотреть</button>


                </div>

            </div>
        </div>
    </div>
}
