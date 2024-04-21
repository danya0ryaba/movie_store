import React, { ChangeEvent } from 'react'
import style from './inputcustom.module.scss'
import { ReactComponent as Search } from '../../assets/img/search_black_svg.svg'
import { ReactComponent as Close } from '../../assets/img/close.svg'

type InputCustomType = {
    setTouch: (value: boolean) => void
    touch: boolean
    requestSearchName: (name: string) => void
}

export const InputCustom: React.FC<InputCustomType> = ({ requestSearchName, setTouch, touch }) => {

    const [input, setInput] = React.useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

    const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (input.trim().length === 1 && e.key === 'Backspace') {
            setTouch(false)
        }
        if (e.key === 'Enter' && input.trim().length > 0) {
            setTouch(true)
            requestSearchName(input)
        }
    }

    const onClickHandler = () => {
        if (input.trim().length > 0) {
            setTouch(true)
            requestSearchName(input)
        }
    }

    const onClickClose = () => {
        setTouch(false)
        setInput('')
    }

    return <div className={style.input}>
        <div className={style.wrapperInp}>
            <input
                tabIndex={1}
                type="text"
                className={style.customInput}
                value={input}
                onChange={onChangeInput}
                onKeyDown={onKeyDownInput} />

            <Search onClick={onClickHandler} tabIndex={2} className={style.search} />
            <Close onClick={onClickClose} tabIndex={3} className={style.close} />
        </div>
    </div>
}
