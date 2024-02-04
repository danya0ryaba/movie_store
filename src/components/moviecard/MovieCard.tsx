import React from 'react'
import style from './moviecard.module.scss'
import poster from '../../assets/img/poster_film.png'
import clock from '../../assets/img/clock.png'
import star from '../../assets/img/star.png'

export const MovieCard = () => {
    return <div className={style.category__films_item}>

        <div className={style.item_film}>

            <img src={poster} className={style.poster} alt="poster films" />

            <div className={style.item_film_info}>

                <div className={style.info}>
                    <h5 className={style.film__name}>Free Guy</h5>

                    <span className={style.film__date}>2023</span>
                </div>



                <div className={style.item__info}>

                    <span className={style.quality}>HD</span>

                    <div className={style.duration}>
                        <img src={clock} alt="duration current film" className={style.duration__current_film} />
                        <span>130 min</span>
                    </div>

                    <div className={style.rating}>
                        <img src={star} alt="star" className={style.star} />
                        <span className={style.rating__value}>7.0</span>
                    </div>

                </div>

            </div>

        </div>

    </div>
}
