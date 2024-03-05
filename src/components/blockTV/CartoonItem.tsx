import React from 'react'
import style from './tvitem.module.scss'
import { CartoonInterface } from '../../type/cartoon'

export const CartoonItem: React.FC<CartoonInterface> = ({
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

    return <div className={style.cards__item}>

        <article className={style.card}>

            <div className={style.card__image}>
                <img src={poster.previewUrl} alt="poster" />
            </div>

            <div className={style.card__content}>
                <span className={style.age}>{ageRating}+</span>
                <h2 className={style.name}>{name}</h2>
                <p className={style.short__desc}>{shortDescription}</p>
            </div>

        </article>

    </div>
}
