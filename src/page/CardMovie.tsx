import React, { useEffect } from 'react'
import style from './cardmovie.module.scss'
import { InfoFilm } from '../components/infofilm/InfoFilm'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { getInfoFilm } from '../store/film/filmSlice'
import { Loader } from '../components/loader/Loader'
import { useResize } from '../hook/useResize'

const strBg = 'https://imagetmdb.com/t/p/original/vRTKNKNWLZ22fAgPa5kY8wT2b1F.jpg'

export const CardMovie: React.FC = () => {

    // const resize = useResize()
    // const bgSize = resize < 900 ? 'contain' : 'cover';
    // backgroundSize: `${bgSize}`,

    const { id } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getInfoFilm(Number(id)))
        window.scrollTo(0, 0)
    }, [id, dispatch])
    const { film, isLoading } = useAppSelector(state => state.film)
    const bg = film.backdrop?.url ? film.backdrop.url : strBg;

    return isLoading ? <Loader /> :
        <div className={style.card__fullscreen} style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            marginTop: '-104px',
            width: '100vw',
            height: '100vh'
        }}>
            <div className={style.card__gradient}>
                <InfoFilm {...film} />
            </div>
        </div>
}