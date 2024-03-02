import React, { ChangeEvent } from 'react'
import style from './inputcustom.module.scss'
import { ReactComponent as Search } from '../../assets/img/search_black_svg.svg'
import { usersAPI } from '../../API/api'

export const InputCustom: React.FC = () => {

    // состояния хранится тут (локально)
    const [input, setInput] = React.useState('')

    // эта функция должна приходить из пропсов
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    // эта функция должна приходить из пропсов или нет
    const onClickHandler = () => {
        usersAPI.getSearch(input).then(res => console.log(res.data))
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
