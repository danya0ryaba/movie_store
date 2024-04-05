import React from 'react'
import style from './category.module.scss'
import { MovieCard } from '../moviecard/MovieCard'
import { ButtonCategory } from './buttoncategory/ButtonCategory'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/redux'
import { Loader } from '../loader/Loader'

const nameCategory = ['Фильмы', 'ТВ-Шоу', 'Аниме']

export const Category = () => {

    const { movies, isLoading } = useAppSelector(state => state.movie)

    return <section className={style.category}>
        <div className={style.container}>
            {isLoading ? <Loader /> : <>
                <div className={style.category__info}>
                    <div className={style.text}>
                        <h3 className={style.title}>ONLINE STREAMING</h3>
                        <h4 className={style.subtitle}>Лучшие Фильмы</h4>
                    </div>
                    <div className={style.filters}>
                        {nameCategory.map(item => <ButtonCategory key={item}>{item}</ButtonCategory>)}
                    </div>
                </div>
                <div className={style.category__films}>
                    {movies.map(card => <Link key={card.id} to={`movie/${card.id}`}>
                        <MovieCard key={card.id} {...card} />
                    </Link>)}
                </div> </>}
        </div>
    </section>
}