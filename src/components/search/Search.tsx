import React, { ChangeEvent } from 'react'
import search from '../../assets/img/search.png'
import style from './search.module.scss'

export const Search: React.FC = () => {

    const [input, setInput] = React.useState('')
    const [isOpenInput, setIsOpenInput] = React.useState(false)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setInput(e.currentTarget.value)

    const onClickSearch = () => setIsOpenInput(!isOpenInput)

    return <>
        {isOpenInput && <input autoFocus value={input} onChange={onChangeInput} className={style.input} id='search' type="text" />}

        <img onClick={onClickSearch} className={style.search} src={search} alt="search" />
    </>
}
