import React from 'react'
import style from './topfilms.module.scss'
import { TopFilmItem } from './topfilmitem/TopFilmItem'
import { Title } from '../title/Title'
import { useAppSelector } from '../../store/hooks/redux'
import { Link } from 'react-router-dom'

export const TopFilms = () => {

    const { anime } = useAppSelector(state => state.anime)

    return <>
        <Title>Аниме</Title>
        <section className={style.top__films}>
            <ul className={style.films}>
                {anime.map(item => <Link key={item.id} to={`movie/${item.id}`}>
                    <TopFilmItem poster={item.poster.previewUrl} />
                </Link>)}
            </ul>

            <span className={style.more}>посмотреть...</span>

        </section>
    </>
}
