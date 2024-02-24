import React, { useEffect } from 'react'
import style from './cardmovie.module.scss'
import { InfoFilm } from '../components/infofilm/InfoFilm'
import { Footer } from '../components/footer/Footer'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { getInfoFilm } from '../store/film/filmSlice'
import { url } from 'inspector'

export const CardMovie = () => {

    const dispatch = useAppDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getInfoFilm(Number(id)))
        window.scroll(0, 0)
    }, [id, dispatch])


    const { film } = useAppSelector(state => state.film)

    const bg = film.backdrop?.url ? film.backdrop.url : 'https://imagetmdb.com/t/p/original/vRTKNKNWLZ22fAgPa5kY8wT2b1F.jpg'

    return (
        <div style={{ background: `url(${bg})` }} className={style.card__fullscreen}>
            <div className={style.card__gradient}>
                <InfoFilm {...film} />
            </div>
        </div>
    )
}
