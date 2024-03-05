import React from 'react'
import style from './fullscreen.module.scss'
import { Button } from '../button/Button'
import date from '../../assets/img/date.png'

export const FullScreen = () => {
    return (
        <div className={style.fullscreen}>

            <div className={style.fullscreen__gradient}>

                <div className={style.fullscreen__info}>

                    <h2 className={style.title}>Filmagnet</h2>

                    <h3 className={style.subtitle}>
                        Безлимитные <span>развлечения</span>,<br /> Фильмы,
                        телепередачи и многое другое
                    </h3>

                    <div className={style.about_film}>
                        <div className={style.type}>Фильмы</div>
                        <div className={style.quality}>HD</div>
                        <div className={style.category}>Множество жанров</div>
                        <div className={style.data}>
                            <img src={date} alt="date" />
                            <span>2024</span>
                        </div>
                    </div>

                    <Button>смотреть сейчас</Button>

                </div>

            </div>


        </div>
    )
}
