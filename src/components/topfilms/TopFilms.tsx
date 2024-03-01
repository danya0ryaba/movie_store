import React from 'react'
import style from './topfilms.module.scss'
import { TopFilmItem } from './topfilmitem/TopFilmItem'
import { Title } from '../title/Title'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { Link } from 'react-router-dom'
import { getAnime } from '../../store/anime/animeSlice'

export const TopFilms = () => {

    const { anime, page } = useAppSelector(state => state.anime)

    const dispatch = useAppDispatch()

    const onViewMore = () => {
        dispatch(getAnime(page + 1))
    }
    return <>
        <Title>Аниме</Title>
        <section className={style.top__films}>
            <ul className={style.films}>
                {anime.map(item => <Link key={item.id} to={`movie/${item.id}`}>
                    <TopFilmItem poster={item.poster.previewUrl} />
                </Link>)}
            </ul>

            <span onClick={onViewMore} className={style.more}>посмотреть...</span>

        </section>
    </>
}
