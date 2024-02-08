import React from 'react'
import { Header } from '../components/header/Header'
import style from './cardmovie.module.scss'
import { InfoFilm } from '../components/infofilm/InfoFilm'
import { Category } from '../components/category/Category'
import { TopFilms } from '../components/topfilms/TopFilms'
import { Popular } from '../components/popular/Popular'
import { Footer } from '../components/footer/Footer'

export const CardMovie = () => {
    return (
        <div className={style.card__fullscreen}>
            <div className={style.card__gradient}>
                <Header />
                <InfoFilm />
                <Category />
                <TopFilms />
                <Popular />
                <Footer />
            </div>
        </div>
    )
}
