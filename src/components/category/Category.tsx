import React from 'react'
import style from './category.module.scss'
import { MovieCard } from '../moviecard/MovieCard'
import { ButtonCategory } from './buttoncategory/ButtonCategory'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { Loader } from '../loader/Loader'
import { getLoadingMovies } from '../../store/movie/loadingMovieSlice'

const filteringValues: { [key: string]: string } = {
    "По рейтингу": "rating.imdb",
    "По рейтингу критиков": "rating.filmCritics",
    "По рейтингу российских критиков": "rating.russianFilmCritics",
    "топ 250": "top250",
    "По мировым сборам": "fees.world.value",
    "По количеству зрителей": "audience.count",
}

export const Category: React.FC = () => {

    const nameCategory = Object.keys(filteringValues);

    const dispatch = useAppDispatch()

    const { loadingMovies, page } = useAppSelector(state => state.loadingMovie)
    const { movies, isLoading, filter } = useAppSelector(state => state.movie)

    const allMovies = [...movies, ...loadingMovies]

    const showMoreCards = () => dispatch(getLoadingMovies({ page: page + 1, filter: filter }))


    return <section className={style.category}>
        <div className={style.container}>
            {isLoading ? <Loader /> : <>
                <div className={style.category__info}>
                    <div className={style.text}>
                        <h3 className={style.title}>ONLINE STREAMING</h3>
                        <h4 className={style.subtitle}>Лучшие Фильмы</h4>
                    </div>

                    <div className={style.filters}>
                        {nameCategory.map(item => <ButtonCategory filter={filteringValues[item]} key={item}>{item}</ButtonCategory>)}
                    </div>

                </div>

                <div className={style.category__films}>
                    {allMovies.map(card => <Link key={card.id} to={`movie/${card.id}`}>
                        <MovieCard key={card.id} {...card} />
                    </Link>)}
                </div> </>}

            <span onClick={showMoreCards} className={style.more}>посмотреть...</span>
        </div>
    </section>
}