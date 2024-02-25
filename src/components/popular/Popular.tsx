import React from 'react'
import style from './popular.module.scss'
import { PopularFilm } from './popularfilm/PopularFilm'
import { Title } from '../title/Title'
// import { ReactComponent as ArrowRight } from '../../assets/img/right-arrow (1).svg'
// import { ReactComponent as ArrowLeft } from '../../assets/img/left-arrow (2).svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import { useAppSelector } from '../../store/hooks/redux';


const popularFilms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const Popular = () => {

    const { cartoon } = useAppSelector(state => state.cartoon)
    console.log(cartoon);

    return <section className={style.popular}>

        <div className={style.container}>

            <Title>мультфильмы</Title>

            <Swiper
                modules={[Scrollbar]}
                spaceBetween={5}
                slidesPerView={5}
            >
                {cartoon.map(cartoon => <SwiperSlide key={cartoon.id}>
                    <PopularFilm {...cartoon} />
                </SwiperSlide>)}
            </Swiper>

            <div className={style.gradient} />

            <p className={style.text__info}>

                Filmagnet — это платформа онлайн-трансляции фильмов, предлагающая пиратский контент, который не был выпущен. Здесь собрана огромная коллекция новейших фильмов и фильмов, которые до сих пор недоступны на рынке и YouTube. Вы можете смотреть и скачивать весь контент бесплатно, но он является незаконным, поэтому вам необходимо принять некоторые меры предосторожности. Он доступен не во всех странах, поэтому вы можете использовать VPN и выбрать местоположение с доступом к Filmagnet. Здесь мы обсудим фильммагнит.
            </p>

        </div>
    </section >
}
