import React from 'react'
import { InputCustom } from '../components/input/InputCustom'
import { Filters } from '../components/filters/Filters'
import { Title } from '../components/title/Title'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import { SelectCustom } from '../components/select/SelectCustom'
import style from './series.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import { changeFilterSeries, getSeries } from '../store/series/seriesSlice'
import { Loader } from '../components/loader/Loader'
import { SearchItem } from '../components/search/searchitem/SearchItem'
import { usersAPI } from '../API/api'
import { Movie } from '../type/movie'
import { filteringSeriesPage } from '../utils/constants'
import { options } from '../utils/options'

const Series: React.FC = () => {
    // для селекта
    const [activeOption, setActiveOption] = React.useState('')

    // для инпута
    const [touch, setTouch] = React.useState(false)
    const [list, setList] = React.useState<Movie[]>([])
    const requestSearchName = (name: string) => usersAPI.getSearch(name).then(res => setList(res.data.docs))

    // для пагинации и записи в стейт текущих сериалов
    const dispatch = useAppDispatch()
    const { series, isLoading, page, filter } = useAppSelector(state => state.series);
    const requestPageSeries = (page: number) => dispatch(getSeries({ page, filter }))

    React.useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getSeries({ page, filter }))
    }, [page, filter, dispatch])

    const onChangeFilter = (updatedFilter: string) => dispatch(changeFilterSeries(updatedFilter))

    return <section className={style.film}>
        <div className={style.series}>

            <Title>Лучшие сериалы</Title>

            <InputCustom touch={touch} setTouch={setTouch} requestSearchName={requestSearchName} />

            {touch && <div className={style.searchFilms}>
                <ul>{list.map(film => <SearchItem key={film.id} {...film} />)}</ul>
            </div>}

            <div className={style.genres}>
                <SelectCustom activeOption={activeOption} setActiveOption={setActiveOption} title={'Жанры'} option={options} />
            </div>

            <Filters onChangeFilter={onChangeFilter} currentFilter={filter} filtersObject={filteringSeriesPage} />

            {isLoading ? <Loader /> : <>
                {series.map(s => <Link key={s.id} to={`${s.id}`}>
                    <Film {...s} />
                </Link>)}
            </>}

            <Pagination page={page} onRequestHandler={requestPageSeries} />

        </div>
    </section>
}

export default Series