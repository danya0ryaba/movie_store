import React from 'react'
import search from '../../assets/img/search.png'
import style from './search.module.scss'

export const Search = () => {

    const [input, setInput] = React.useState(false)

    let classInp = !input ? 'input__none' : 'input__active'

    return <>
        <input className={classInp} id='search' type="text" />
        <img className={style.search} src={search} alt="search" onClick={() => setInput(!input)} />
    </>
}
