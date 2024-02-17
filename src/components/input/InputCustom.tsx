import React, { ChangeEvent } from 'react'
import style from './inputcustom.module.scss'
import { ReactComponent as Search } from '../../assets/img/search_black_svg.svg'

// НАПИСАТЬ УНИВЕРСАЛЬНЫЙ ИНПУТ

export const InputCustom = () => {

    const [input, setInput] = React.useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const onClickHandler = () => {
        console.log(input)
        setInput('')
    }

    return <div className={style.input}>
        <div className={style.wrapperInp}>
            <input
                tabIndex={1}
                type="text"
                className={style.customInput}
                value={input}
                onChange={onChangeInput} />

            <Search onClick={onClickHandler} tabIndex={2} className={style.search} />
        </div>
    </div>
}
