import React from 'react'
import style from './film.module.scss'
import camera from '../../assets/img/camera.png'
import { Movie } from '../../type/movie'

export const Film: React.FC<Movie> = ({
    rating,
    name,
    year,
    poster,
    genres,
    countries,
    shortDescription,
    ageRating,
    ...rest
}) => {

    return <div className={style.card__film}>
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.card__info}>
                    <div className={style.poster}>
                        <img src={`${poster.previewUrl}`} alt="poster" />
                    </div>
                    <div className={style.info}>
                        <h4 className={style.title}>{name}</h4>
                        <span className={style.aboutFilm}>
                            {countries[0].name} ({genres.map((i, index, arr) => {
                                if (index == arr.length - 1) return `${i.name}`
                                else return `${i.name}, `
                            })})
                            <br />
                            {year} год
                        </span>
                        <button className={style.trailer}>
                            <img className={style.camera} src={camera} alt="camera" />
                            <span>Трейлер</span>
                        </button>
                    </div>
                </div>
                <div className={style.card__rating}>
                    <div className={style.rating__info}>
                        <span className={style.rating__value}>
                            {rating.imdb}
                            <svg width="16" height="16" viewBox="0 0 33 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4658 0.456238L20.2327 12.0494H32.4225L22.5607 19.2144L26.3276 30.8076L16.4658 23.6427L6.60406 30.8076L10.3709 19.2144L0.509154 12.0494H12.699L16.4658 0.456238Z" fill="gold" />
                            </svg>
                        </span>
                        <span className={style.view}>{ageRating ? `${ageRating}+` : 'ограничение отсутствует'}</span>
                        <button className={style.view_btn}>Буду смотреть</button>
                    </div>
                    <div className={style.desc}>
                        {shortDescription ? `${shortDescription}.` : 'описание отсутствует'}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

// status,
//     rating,
//     votes,
//     backdrop,
//     movieLength,
//     id,
//     type,
//     name,
//     description,
//     year,
//     poster,
//     genres,
//     countries,
//     typeNumber,
//     alternativeName,
//     enName,
//     names,
//     ratingMpaa,
//     shortDescription,
//     ticketsOnSale,
//     ageRating,
//     logo,
//     top10,
//     top250,
//     isSeries,
//     seriesLength,
//     totalSeriesLength