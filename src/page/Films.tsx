import React from 'react'
import { Header } from '../components/header/Header'
import { Title } from '../components/title/Title'
import { Filters } from '../components/filters/Filters'
import { Film } from '../components/film/Film'
import { Pagination } from '../components/pagination/Pagination'

let bestFilms: number[] = []
for (let i = 0; i < 10; i++) {
    bestFilms.push(i)
}

export const Films = () => {
    return <>
        <Header />

        <Title>250 лучших фильмов</Title>

        <Filters />

        {bestFilms.map(film => <Film key={film} />)}

        <Pagination />
    </>
}
