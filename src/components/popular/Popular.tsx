import React from 'react'
import style from './popular.module.scss'
import { PopularFilm } from './popularfilm/PopularFilm'
import { Title } from '../title/Title'
// import { ReactComponent as ArrowRight } from '../../assets/img/right-arrow (1).svg'
// import { ReactComponent as ArrowLeft } from '../../assets/img/left-arrow (2).svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';


const popularFilms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const Popular = () => {
    return <section className={style.popular}>

        <div className={style.container}>

            <Title>popular films</Title>

            <Swiper
                modules={[Scrollbar]}
                spaceBetween={5}
                slidesPerView={5}
            >
                {popularFilms.map(item => <SwiperSlide key={item}><PopularFilm /></SwiperSlide>)}
            </Swiper>

            <div className={style.gradient} />

            <p className={style.text__info}>
                Filmagnet is an online movie streaming platform that offers pirated content that is not released. It has a huge collection of latest movies and films that still not available on the market and YouTube. You can watch and download all contents free of costs, but they are illegal, so you have to take some precautions. It is not available in all countries so you can use VPN and choose a location with access to Filmagnet. Here, we will discuss the Filmagnet.
            </p>

        </div>
    </section >
}
