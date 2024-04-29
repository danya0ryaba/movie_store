import React from 'react'
import style from './selectcustom.module.scss'
import { Option } from './Option'
import { ReactComponent as ArrowDown } from '../../assets/img/arrow_up.svg';

type SelectCustomType = {
    option: string[],
    title: string
}

export const SelectCustom: React.FC<SelectCustomType> = ({ option, title }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [isName, setIsName] = React.useState(title)

    const arrayFiltered = option.filter(l => l !== isName)

    const onClickOption = (name: string) => {
        setIsName(name)
        setIsOpen(false)
    }

    const styleArrow = isOpen ? '0deg' : '180deg'

    return <div className={style.select}>

        <span className={style.language} onClick={() => setIsOpen(!isOpen)}>
            {isName}
            <span className={style.arrow}>
                <ArrowDown className={style.arrow__item} style={{ transform: `rotate(${styleArrow})`, margin: '0 3px', transition: ' 0.3s all' }} />
            </span>
        </span>

        <div className={style.forOptionPosition}>
            {isOpen && arrayFiltered.map(lang => (<Option onClickOption={onClickOption} key={lang}>{lang}</Option>))}
        </div>

    </div>
}






