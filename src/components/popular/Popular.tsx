import React from 'react'
import style from './popular.module.scss'
import { PopularFilm } from './popularfilm/PopularFilm'
import { Title } from '../title/Title'

const popularFilms = [1, 2, 3, 4, 5]

export const Popular = () => {
    return <section className={style.popular}>
        <div className={style.container}>

            <Title>popular films</Title>

            <button className="back">&#8592;</button>
            <div className={style.popular__films}>
                {popularFilms.map(item => <PopularFilm key={item} />)}
            </div>
            <button className="forward">&#8594;</button>

            <p className={style.text__info}>
                Filmagnet is an online movie streaming platform that offers pirated content that is not released. It has a huge collection of latest movies and films that still not available on the market and YouTube. You can watch and download all contents free of costs, but they are illegal, so you have to take some precautions. It is not available in all countries so you can use VPN and choose a location with access to Filmagnet. Here, we will discuss the Filmagnet.
            </p>

        </div>
    </section>
}
