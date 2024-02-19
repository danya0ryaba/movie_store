import React from 'react'
import style from './tvitem.module.scss'
import { Button } from '../button/Button'

export const TvItem = () => {
    return <div className={style.block__tv}>

        <div className={style.wrapper}>

            <div className={style.image}>
                <img className={style.image__img} src="https://imagetmdb.com/t/p/w500/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg" alt="poster" />
            </div>

            <div className={style.info}>
                Культовые сериалы
                <h4 className={style.title}>Name TV-show</h4>
                <Button>Смотреть</Button>
            </div>


        </div>
    </div >
}
