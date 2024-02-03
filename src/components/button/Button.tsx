import React from 'react'
import style from './button.module.scss'

interface Button {
    children: React.ReactNode
}

export const Button: React.FC<Button> = ({ children }) => {
    return <button className={style.button}>{children}</button>
}
