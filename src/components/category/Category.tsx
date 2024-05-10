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
import { getMovies } from '../../store/movie/movieSlice'
import { motion } from 'framer-motion'

export const Category: React.FC = () => {

    const dispatch = useAppDispatch()

    const { loadingMovies, page } = useAppSelector(state => state.loadingMovie)

    const { movies, isLoading, filter } = useAppSelector(state => state.movie)

    const allMovies = [...movies, ...loadingMovies]

    const showMoreCards = () => dispatch(getLoadingMovies({ page: page + 1, filter }))

    React.useEffect(() => {
        dispatch(getMovies({ page: 1, filter }))
    }, [dispatch, filter])


    const listVariants = {
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5
            },
        }),
        hidden: { opacity: 0, y: 100 }
    }

    return <section className={style.category}>
        <div className={style.container}>

            <CategoryHeader filters={filteringValues} />

            {isLoading ? <Loader /> : <>
                <ul className={style.category__films}>
                    {allMovies.map(card => <Link key={card.id} to={`movie/${card.id}`}>
                        <motion.li
                            key={card.id}
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            custom={card.id}>
                            <MovieCard {...card} />
                        </motion.li>
                    </Link>)}
                </ul> </>}
            <More handlerClick={showMoreCards} />
        </div>
    </section >
}