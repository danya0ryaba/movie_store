import React from 'react'
import style from './category.module.scss'
import { MovieCard } from '../moviecard/MovieCard'
import { TopFilms } from '../topfilms/TopFilms'

export const Category = () => {
    return <section className={style.category}>
        <div className={style.container}>
            <div className={style.category__info}>

                <div className={style.text}>
                    <h3 className={style.title}>ONLINE STREAMING</h3>
                    <h4 className={style.subtitle}>Upcoming Movies</h4>
                </div>

                <div className={style.filters}>
                    <button className={style.filters__item}>Movies</button>
                    <button className={style.filters__item}>TVs Shows</button>
                    <button className={style.filters__item}>Anime</button>
                </div>

            </div>

            <div className={style.category__films}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>

    </section>
}
