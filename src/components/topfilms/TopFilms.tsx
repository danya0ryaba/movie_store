import React from 'react'
import style from './topfilms.module.scss'
import { TopFilmItem } from './topfilmitem/TopFilmItem'
import { Title } from '../title/Title'

const topFilms = [1, 2, 3, 4, 5]

export const TopFilms = () => {
    return <>
        <Title>top films</Title>
        <section className={style.top__films}>
            <ul className={style.films}>
                {topFilms.map(item => <TopFilmItem key={item} />)}
            </ul>
        </section>
    </>
}
