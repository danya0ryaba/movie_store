import React from 'react'
import { Title } from '../components/title/Title'
import { Filters } from '../components/filters/Filters'
import { Pagination } from '../components/pagination/Pagination'
import style from './series.module.scss'
import { InputCustom } from '../components/input/InputCustom'
import { SelectCustom } from '../components/select/SelectCustom'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { changeFilter, getMovies } from '../store/movie/movieSlice'
import { Loader } from '../components/loader/Loader'
import { getSearchMovie } from '../store/search/searchSlice'
import { SearchItem } from '../components/search/searchitem/SearchItem'
import { filteringFilmsPage } from '../utils/constants'
import { resetLoadingMovie } from '../store/movie/loadingMovieSlice'
import { Film } from '../components/film/Film'
import { options } from '../utils/options'
import { Footer } from '../components/footer/Footer'

const Films: React.FC = () => {

    // for select
    const [activeOption, setActiveOption] = React.useState('')
    // for input
    const [touch, setTouch] = React.useState(false)
    const { searchMovies } = useAppSelector(state => state.searchMovie)
    const requestSearchName = (name: string) => dispatch(getSearchMovie(name))

    const { movies, page, isLoading, filter } = useAppSelector(state => state.movie)

    const dispatch = useAppDispatch()

    // ВОЗМОЖНО, УБРАТЬ PAGE ИЗ ЗАВИСИМОСТЕЙ И НЕ ПРОКИДЫВАТЬ  FILTER В Pagination
    React.useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getMovies({ page, filter }))
        return () => window.scrollTo(0, 0)
    }, [page, filter, dispatch])

    // for change filter
    const onChangeFilter = (updatedFilter: string) => {
        dispatch(resetLoadingMovie())
        dispatch(changeFilter(updatedFilter))
        // dispatch(getMovies({ page: 1, filter: updatedFilter }))
    }

    // ВСЕ РАВНО ПРИ ИЗМЕНЕНИИ ФИЛЬТРА БЕРЕТ СТРАНИЦУ ИЗ СТАРОГО СОСТОЯНИЯ
    const requestPage = (page: number) => {
        dispatch(getMovies({ page, filter }))
    }

    return <section className={style.film}>
        <div className={style.series}>

            <Title>Лучшие фильмов</Title>

            <InputCustom touch={touch} setTouch={setTouch} requestSearchName={requestSearchName} />

            {touch && <div className={style.searchFilms}>
                <ul>{searchMovies.map(film => <SearchItem key={film.id} {...film} />)}</ul>
            </div>}

            <div className={style.genres}>
                <SelectCustom title={'Жанры'} option={options} activeOption={activeOption} setActiveOption={setActiveOption} />
            </div>

            <Filters currentFilter={filter} onChangeFilter={onChangeFilter} filtersObject={filteringFilmsPage} />

            {isLoading ?
                <Loader /> : <>
                    {movies.map(film => <Link key={film.id} to={`${film.id}`}>
                        <Film  {...film} />
                    </Link>)}
                </>}

            <Pagination onRequestHandler={requestPage} page={page} />

        </div>
        <Footer />
    </section>
}

export default Films