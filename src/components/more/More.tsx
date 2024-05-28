import React from 'react'
import style from './more.module.scss'
import { Loader } from '../loader/Loader'

type MoreType = {
    handlerClick: () => void
}

export const More: React.FC<MoreType> = ({ handlerClick }) => {

    const [view, setView] = React.useState(false)

    const onClickHandlerMore = () => {
        setView(true)
        setTimeout(() => setView(false), 1500)
        handlerClick()
    }

    return <>
        <div onClick={onClickHandlerMore} className={style.more}>
            посмотреть еще...
        </div>
        {view && <Loader />}
    </>
}