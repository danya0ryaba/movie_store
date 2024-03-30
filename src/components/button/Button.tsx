import React from 'react'
import style from './button.module.scss'

interface Button {
    readonly children: React.ReactNode
    onClick?: () => void
}

export const Button: React.FC<Button> = ({ children, onClick }) => {
    return <button onClick={onClick} className={style.button}>{children}</button>
}
