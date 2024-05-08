import React from 'react'
import style from './selectcustom.module.scss'
import { Option } from './Option'
import { ReactComponent as ArrowDown } from '../../assets/img/arrow_up.svg';

type SelectCustomType = {
    option: string[],
    title: string
    activeOption: string
    setActiveOption: (value: string) => void
}

export const SelectCustom: React.FC<SelectCustomType> = ({ option, title, activeOption, setActiveOption }) => {

    const [isOpen, setIsOpen] = React.useState(false)

    const arrayFiltered = option.filter(l => l !== activeOption)

    const onClickOption = (name: string) => {
        setActiveOption(name)
        setIsOpen(false)
    }

    const styleArrow = isOpen ? '0deg' : '180deg'

    return <div className={style.select}>

        <span className={style.language} onClick={() => setIsOpen(!isOpen)}>
            {activeOption || title}
            <span className={style.arrow}>
                <ArrowDown className={style.arrow__item} style={{ transform: `rotate(${styleArrow})`, margin: '0 3px', transition: ' 0.3s all' }} />
            </span>
        </span>

        <div className={style.forOptionPosition}>
            {isOpen && arrayFiltered.map(lang => (<Option onClickOption={onClickOption} key={lang}>{lang}</Option>))}
        </div>

    </div>
}






