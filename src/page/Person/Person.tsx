import React from 'react'
import s from './person.module.scss'

import { usersAPI } from '../../API/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import { Scrollbar } from 'swiper/modules'


export const Person = () => {

    // React.useEffect(() => {
    //     usersAPI.getPersonId(797).then(res => console.log(res.data))
    // })

    return <div className={s.container}>
        <section className={s.person}>

            <div className={s.person__img}>
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/7b37ed50-2bb0-4f22-adba-d94023ed9a38/280x420" alt="портрет" />
            </div>

            <div className={s.person__info}>

                <h2 className={s.name}>Мэттью Макконахи</h2>
                <h2 className={s.en_name}>Matthew McConaughey</h2>

                <div className={s.about__person}>
                    <h3 className={s.about}>О персоне</h3>
                    <div className={s.about_info}>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Карьера</span>
                            <span className={s.value}>Актер, Продюсер, Режиссер, Сценарист</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Карьера</span>
                            <span className={s.value}>Актер, Продюсер, Режиссер, Сценарист</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Карьера</span>
                            <span className={s.value}>Актер, Продюсер, Режиссер, Сценарист</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Карьера</span>
                            <span className={s.value}>Актер, Продюсер, Режиссер, Сценарист</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Карьера</span>
                            <span className={s.value}>Актер, Продюсер, Режиссер, Сценарист</span>
                        </span>

                    </div>
                </div>

            </div>

        </section>

        <div className="films">
            {/* <Swiper modules={[Scrollbar]} spaceBetween={5} slidesPerView={5}>
                {lalalala.map(s => <SwiperSlide key={s.id}>
                    <NavLink to={`/movie/${s.id}`}>
                        <PopularFilm previewUrl={s.poster.previewUrl} />
                    </NavLink>
                </SwiperSlide>)}
            </Swiper> */}
        </div>

        <div className={s.facts}>
            <h4>Знаете ли вы?</h4>
            <ul className={s.facts__ul}>
                <li className={s.facts__ul_li}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, unde!</li>
                <li className={s.facts__ul_li}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, magni! Tempora eligendi quae ab!</li>
                <li className={s.facts__ul_li}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
    </div>
}
