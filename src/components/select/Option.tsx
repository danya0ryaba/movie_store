import React from 'react'
import style from './option.module.scss'
import { Language } from './SelectCustom'

interface OptionInterface {
    children: any,
    onClickOption: (language: Language) => void
}

export const Option: React.FC<OptionInterface> = ({
    children,
    onClickOption
}) => {
    return <div className={style.language__option} onClick={() => { onClickOption(children) }}>
        {children}
    </div>
}
