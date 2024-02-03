import React from 'react'
import style from './fullscreen.module.scss'
import { Button } from '../button/Button'
import date from '../../assets/img/date.png'

export const FullScreen = () => {
    return (
        <div className={style.fullscreen}>

            <div className={style.fullscreen__info}>

                <h2 className={style.title}>Filmagnet</h2>

                <h3 className={style.subtitle}>
                    Unlimited <span>Entertainment</span>,<br />Movies, TVs shows, & More.
                </h3>

                <div className={style.about_film}>
                    <div className={style.type}>Movie</div>
                    <div className={style.quality}>HD</div>
                    <div className={style.category}>Action, Drama</div>
                    <div className={style.data}>
                        <img src={date} alt="date" />
                        <span>2023</span>
                    </div>
                </div>

                <Button>play now</Button>

            </div>

        </div>
    )
}
