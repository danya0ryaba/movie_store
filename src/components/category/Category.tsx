import React from 'react'
import style from './category.module.scss'
import { MovieCard } from '../moviecard/MovieCard'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { Loader } from '../loader/Loader'
import { getLoadingMovies } from '../../store/movie/loadingMovieSlice'
import { CategoryHeader } from '../categoryHeader/CategoryHeader'
import { filteringValues } from '../../utils/constants'
import { More } from '../more/More'

export const Category: React.FC = () => {

    const dispatch = useAppDispatch()

    const { loadingMovies, page } = useAppSelector(state => state.loadingMovie)

    const { movies, isLoading, filter } = useAppSelector(state => state.movie)

    const allMovies = [...movies, ...loadingMovies]

    const showMoreCards = () => dispatch(getLoadingMovies({ page: page + 1, filter }))

    return <section className={style.category}>
        <div className={style.container}>
            <CategoryHeader filters={filteringValues} />
            {isLoading ? <Loader /> : <>
                <div className={style.category__films}>
                    {allMovies.map(card => <Link key={card.id} to={`movie/${card.id}`}>
                        <MovieCard key={card.id} {...card} />
                    </Link>)}
                </div> </>}
            <More handlerClick={showMoreCards} />
        </div>
    </section>
}