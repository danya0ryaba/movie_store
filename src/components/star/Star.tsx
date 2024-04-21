import React from 'react'
import style from './star.module.scss'

type StarType = {
    onCloseRating: () => void
    starValue: number
    selected: boolean
    setGradeValue: (value: number) => void
}

export const Star: React.FC<StarType> = ({ starValue, selected, setGradeValue, onCloseRating }) => {

    const onClickHandler = () => {
        setGradeValue(starValue + 1)
        setTimeout(() => onCloseRating(), 1000)
    }

    return <>
        {selected ?
            <svg className={style.star} onClick={onClickHandler} width="33" height="33" viewBox="0 0 33 31" fill="#ffff00" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4658 0.456238L20.2327 12.0494H32.4225L22.5607 19.2144L26.3276 30.8076L16.4658 23.6427L6.60406 30.8076L10.3709 19.2144L0.509154 12.0494H12.699L16.4658 0.456238Z" fill='#ffff00' />
            </svg>
            :
            <svg className={style.star} onClick={onClickHandler} width="33" height="33" viewBox="0 0 33 31" fill='#ffffff' xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4658 0.456238L20.2327 12.0494H32.4225L22.5607 19.2144L26.3276 30.8076L16.4658 23.6427L6.60406 30.8076L10.3709 19.2144L0.509154 12.0494H12.699L16.4658 0.456238Z" fill='#ffffff' />
            </svg>
        }
    </>
}