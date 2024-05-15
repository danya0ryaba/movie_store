import React from 'react'
import style from './tvitem.module.scss'
import { CartoonInterface } from '../../type/cartoon'

export const CartoonItem: React.FC<CartoonInterface> = (props) => {

    return <div className={style.cards__item}>

        <article className={style.card}>

            <div className={style.card__image}>
                <img src={props.poster?.previewUrl ? props.poster?.previewUrl :
                    "https://i.pinimg.com/564x/9b/a2/57/9ba25796112cad616be27e473ae1e149.jpg"} alt="poster" />
            </div>

            <div className={style.card__content}>
                <span className={style.age}>{props.ageRating}+</span>
                <h2 className={style.name}>{props.name}</h2>
                <p className={style.short__desc}>{props.shortDescription}</p>
            </div>

        </article>

    </div>
}
