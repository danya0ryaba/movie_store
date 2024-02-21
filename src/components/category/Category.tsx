import React from 'react'
import style from './category.module.scss'
import { MovieCard } from '../moviecard/MovieCard'
import { ButtonCategory } from './buttoncategory/ButtonCategory'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/redux'

const nameCategory = ['Movies', 'TVs Shows', 'Anime']

export const Category = () => {

    const { list } = useAppSelector(state => state.movie)

    return <section className={style.category}>
        <div className={style.container}>
            <div className={style.category__info}>

                <div className={style.text}>
                    <h3 className={style.title}>ONLINE STREAMING</h3>
                    <h4 className={style.subtitle}>Upcoming Movies</h4>
                </div>

                <div className={style.filters}>
                    {nameCategory.map(item => <ButtonCategory key={item}>{item}</ButtonCategory>)}
                </div>

            </div>

            <div className={style.category__films}>
                {list.map(card => <Link key={card.id} to={`movie/${card.id}`}>
                    <MovieCard {...card} />
                </Link>)}
            </div>

            <button className={style.more}>Show more...</button>
        </div>
    </section>
}