import React from 'react'
import style from './tvitem.module.scss'
import { Button } from '../button/Button'
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

    // ПЕРЕПИСАТЬ С НУЛЯ КАРТОЧКУ

    return <div className={style.block__cartoon}>

        <div className={style.wrapper}>

            <div className={style.image}>
                <img className={style.image__img} src={poster.previewUrl} alt="poster" />
            </div>

            <div className={style.info}>

                <span className={style.age}>{ageRating}+</span>

                <h4 className={style.title}>{name}</h4>

                <p className={style.shortDescription}>{shortDescription}</p>

            </div>

        </div>
    </div >
}
