import React from 'react'
import style from './option.module.scss'

interface OptionInterface {
    readonly children: string,
    readonly onClickOption: (language: string) => void
}

export const Option: React.FC<OptionInterface> = ({ children, onClickOption }) => {
    return <div
        className={style.language__option}
        onClick={() => { onClickOption(children) }}>
        {children}
    </div>
}
