import React, { ChangeEvent } from 'react'
import style from './inputcustom.module.scss'
import { ReactComponent as Search } from '../../assets/img/search_black_svg.svg'
import { useAppDispatch } from '../../store/hooks/redux'
import { changeIsExist } from '../../store/search/searchSlice'

type InputCustomType = {
    setTouch: (value: boolean) => void
    touch: boolean
    requestSearchName: (name: string) => void
}

export const InputCustom: React.FC<InputCustomType> = ({ requestSearchName, setTouch, touch }) => {

    const dispatch = useAppDispatch()

    const [input, setInput] = React.useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        checkedValueInput()
        // requestSearchName(input)
        // if (input.length === 0) dispatch(changeIsExist(false))
    }

    const checkedValueInput = () => {

        if (input.length > 0) requestSearchName(input)
        if (input.length === 1) {
            dispatch(changeIsExist(false))
        }
    }

    const onClickHandler = () => {
        if (input.length > 0) {
            requestSearchName(input)
            setInput('')
        }
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
