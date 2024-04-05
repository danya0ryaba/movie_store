import React from 'react'
import { Title } from '../components/title/Title'
import { CartoonBlock } from '../components/blockTV/CartoonBlock'
import { InputCustom } from '../components/input/InputCustom'

export const Cartoon = () => {
    const [touch, setTouch] = React.useState(false)

    const requestSearchName = (name: string) => { }

    return <>
        <Title>Мультфильмы</Title>
        <InputCustom touch={touch} setTouch={setTouch} requestSearchName={requestSearchName} />
        <CartoonBlock />
    </>
}
