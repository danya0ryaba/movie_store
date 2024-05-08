import React from 'react'
import style from './more.module.scss'

type MoreType = {
    handlerClick: () => void
}

export const More: React.FC<MoreType> = ({ handlerClick }) => {
    return <div onClick={handlerClick} className={style.more}>посмотреть...</div>
}
