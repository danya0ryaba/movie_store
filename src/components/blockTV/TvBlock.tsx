import React from 'react'
import style from './tvblock.module.scss'
import { TvItem } from './TvItem'
import { Link } from 'react-router-dom'

let tv: number[] = []

for (let i = 0; i < 12; i++) {
    tv.push(i)
}

export const TvBlock = () => {
    return <section className={style.tv}>
        <div className={style.tv__container}>
            {tv.map(i => (<Link key={i} to={'456'}><TvItem /></Link>))}
        </div>
    </section>
}
