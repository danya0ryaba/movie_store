import React, { useEffect } from 'react'
import style from './cardmovie.module.scss'
import { InfoFilm } from '../components/infofilm/InfoFilm'
import { Footer } from '../components/footer/Footer'

export const CardMovie = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className={style.card__fullscreen}>
            <div className={style.card__gradient}>
                <InfoFilm />
                <Footer />
            </div>
        </div>
    )
}
