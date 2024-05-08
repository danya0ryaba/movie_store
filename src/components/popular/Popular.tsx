import React from 'react'
import style from './popular.module.scss'
import { PopularFilm } from './popularfilm/PopularFilm'
import { Title } from '../title/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import { useAppSelector } from '../../store/hooks/redux';
import { NavLink } from 'react-router-dom';
import { Loader } from '../loader/Loader';

export const Popular: React.FC = () => {

    const { series, isLoading } = useAppSelector(state => state.series)

    return <section className={style.popular}>
        <div className={style.container}>
            <Title>сериалы</Title>
            <div className={style.gradient__left} />
            {isLoading ? <Loader /> : <Swiper modules={[Scrollbar]} spaceBetween={5} slidesPerView={5}>
                {series.map(s => <SwiperSlide key={s.id}>
                    <NavLink to={`/movie/${s.id}`}>
                        <PopularFilm previewUrl={s.poster?.previewUrl ? s.poster.previewUrl : ""} />
                    </NavLink>
                </SwiperSlide>)}
            </Swiper>}
            <div className={style.gradient} />
            <p className={style.text__info}>
                Filmagnet — это платформа онлайн-трансляции фильмов,
                предлагающая пиратский контент, который не был выпущен.
                Здесь собрана огромная коллекция новейших фильмов и фильмов,
                которые до сих пор недоступны на рынке и YouTube. Вы можете смотреть и
                скачивать весь контент бесплатно, но он является незаконным, поэтому вам
                необходимо принять некоторые меры предосторожности. Он доступен не во всех странах,
                поэтому вы можете использовать VPN и выбрать местоположение с доступом к Filmagnet.
                Здесь мы обсудим фильммагнит.
            </p>
        </div>
    </section >
}
