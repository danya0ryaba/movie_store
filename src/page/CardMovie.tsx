import React, { useEffect } from 'react'
import style from './cardmovie.module.scss'
import { InfoFilm } from '../components/infofilm/InfoFilm'
import { Footer } from '../components/footer/Footer'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { getInfoFilm } from '../store/film/filmSlice'

export const CardMovie = () => {

    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getInfoFilm(Number(id)))
    }, [id])


    const { film } = useAppSelector(state => state.film)
    console.log(film);

    return (
        <div className={style.card__fullscreen}>
            <div className={style.card__gradient}>
                <InfoFilm {...film} />
                <Footer />
            </div>
        </div>
    )
}
