import React from 'react'
import style from './topfilms.module.scss'
import { TopFilmItem } from './topfilmitem/TopFilmItem'
import { Title } from '../title/Title'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { Link } from 'react-router-dom'
import { getAnime } from '../../store/anime/animeSlice'
import { Loader } from '../loader/Loader'
import { More } from '../more/More'

export const TopFilms: React.FC = () => {

    const dispatch = useAppDispatch()
    const { anime, page, isLoading } = useAppSelector(state => state.anime)
    const onViewMore = () => dispatch(getAnime(page + 1))

    return <>
        <Title>Аниме</Title>
        <section className={style.top__films}>
            {isLoading ? <Loader /> : <>
                <ul className={style.films}>
                    {anime.map(item => <Link key={item.id} to={`movie/${item.id}`}>
                        <TopFilmItem poster={item.poster?.previewUrl ?
                            item.poster?.previewUrl :
                            "https://image.openmoviedb.com/kinopoisk-images/10809116/e1befa7a-c495-4a4a-be01-220b92724e43/x1000"} />
                    </Link>)}
                </ul>
                {/* <span onClick={onViewMore} className={style.more}>посмотреть...</span> */}
                <More handlerClick={onViewMore} />
            </>}
        </section>
    </>
}