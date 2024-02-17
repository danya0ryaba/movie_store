import React from 'react'
import { Header } from '../components/header/Header'
import { Title } from '../components/title/Title'
import { Filters } from '../components/filters/Filters'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'
import style from './films.module.scss'
import { InputCustom } from '../components/input/InputCustom'

let bestFilms: number[] = []
for (let i = 0; i < 10; i++) {
    bestFilms.push(i)
}

export const Films = () => {

    // const onClickBack = () => { }

    return <>
        <Header />
        <Title>250 лучших фильмов</Title>

        {/* <button className={style.back} onClick={onClickBack}> &#129044; Back</button> */}
        <Filters />
        <InputCustom />

        {bestFilms.map(film => <Film key={film} />)}

        <Pagination />
    </>
}
