import React from 'react'
import { Title } from '../components/title/Title'
import { CartoonBlock } from '../components/blockTV/CartoonBlock'
import { InputCustom } from '../components/input/InputCustom'
import { SearchItem } from '../components/search/searchitem/SearchItem'
import { usersAPI } from '../API/api'
import style from './cartoon.module.scss'
import { Movie } from '../type/movie'

export const Cartoon: React.FC = () => {

    const [touch, setTouch] = React.useState(false)
    const [list, setList] = React.useState<Movie[]>([])
    const requestSearchName = (name: string) => usersAPI.getSearch(name).then(res => setList(res.data.docs))

    return <>
        <Title>Мультфильмы</Title>
        <InputCustom touch={touch} setTouch={setTouch} requestSearchName={requestSearchName} />

        {touch && <div className={style.searchFilms}>
            <ul>{list.map(film => <SearchItem key={film.id} {...film} />)}</ul>
        </div>}

        <CartoonBlock />
    </>
}