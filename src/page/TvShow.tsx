import React from 'react'
import { Title } from '../components/title/Title'
import { TvBlock } from '../components/blockTV/TvBlock'
import { Pagination } from '../components/pagination/Pagination'
import { InputCustom } from '../components/input/InputCustom'

export const TvShow = () => {
    return <>
        <Title>Телепередачи</Title>
        <InputCustom />
        <TvBlock />
        <Pagination />
    </>
}
