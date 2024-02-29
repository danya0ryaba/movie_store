import React from 'react'
import { Title } from '../components/title/Title'
import { CartoonBlock } from '../components/blockTV/CartoonBlock'
import { Pagination } from '../components/pagination/Pagination'
import { InputCustom } from '../components/input/InputCustom'

export const Cartoon = () => {
    return <>
        <Title>Мультфильмы</Title>
        <InputCustom />
        <CartoonBlock />
        {/* <Pagination /> */}
    </>
}
