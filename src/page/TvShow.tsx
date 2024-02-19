import React from 'react'
import { Title } from '../components/title/Title'
import { TvBlock } from '../components/blockTV/TvBlock'
import { Pagination } from '../components/pagination/Pagination'

export const TvShow = () => {
    return <>
        <Title>Телепередачи</Title>
        <TvBlock />
        <Pagination />
    </>
}
