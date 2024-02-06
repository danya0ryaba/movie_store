import React, { ReactNode } from 'react'
import style from './title.module.scss'

interface TitleInterface {
    children: ReactNode
}

export const Title: React.FC<TitleInterface> = ({ children }) => {
    return <h2 className={style.title}>{children}</h2>
}
