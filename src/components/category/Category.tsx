import React from 'react'
import style from './category.module.scss'
import { MovieCard } from '../moviecard/MovieCard'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { Loader } from '../loader/Loader'
import { getLoadingMovies, resetLoadingMovie } from '../../store/movie/loadingMovieSlice'
import { filteringValues } from '../../utils/constants'
import { More } from '../more/More'
import { changeFilter, getMovies } from '../../store/movie/movieSlice'
import { Filters } from '../filters/Filters'

export const Category: React.FC = () => {

    const dispatch = useAppDispatch()

    const { loadingMovies, page } = useAppSelector(state => state.loadingMovie)
    const { movies, isLoading, filter } = useAppSelector(state => state.movie)

    const allMovies = [...movies, ...loadingMovies]

    const showMoreCards = () => dispatch(getLoadingMovies({ page: page + 1, filter }))

    React.useEffect(() => {
        dispatch(getMovies({ page: 1, filter }))
    }, [dispatch, filter])

    const onChangeFilter = (updatedFilter: string) => {
        dispatch(resetLoadingMovie())
        dispatch(changeFilter(updatedFilter))
    }

    return <section className={style.category}>
        <div className={style.container}>

            <div className={style.text}>
                <h3 className={style.title}>ONLINE STREAMING</h3>
                <h4 className={style.subtitle}>Лучшие Фильмы</h4>
            </div>

            <Filters currentFilter={filter} filtersObject={filteringValues} onChangeFilter={onChangeFilter} />

            {isLoading ? <Loader /> :
                <ul className={style.category__films}>
                    {allMovies.map(card => <Link key={card.id} to={`movie/${card.id}`}>
                        <MovieCard {...card} />
                    </Link>)}
                </ul>}

            <More handlerClick={showMoreCards} />
        </div>
    </section >
}