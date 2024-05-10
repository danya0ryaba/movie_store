import React from 'react'
import style from './button.module.scss'

interface ButtonType {
    readonly children: React.ReactNode
    onClick?: (e?: any) => void
    type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonType> = React.memo(({ children, onClick, type }) => {
    return <button type={type ? type : 'button'} onClick={onClick} className={style.button}>{children}</button>
})