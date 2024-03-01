import React from 'react'
import style from './pagination.module.scss'
import { ReactComponent as RightArrow } from '../../assets/img/right-arrow (1).svg'
import { ReactComponent as LeftArrow } from '../../assets/img/left-arrow (2).svg'

type PaginationType = {
    page: number,
    onRequestHandler: (page: number) => void
}

export const Pagination: React.FC<PaginationType> = ({ page, onRequestHandler }) => {

    const [activePage, setActivePage] = React.useState(page)
    console.log(activePage);

    const onClickHandler = (num: number) => {
        setActivePage(num)
        onRequestHandler(num)
    }

    const onLeftArrowHandler = () => {
        setActivePage(activePage - 1)
        onRequestHandler(activePage - 1)
    }

    const onRightArrowHandler = () => {
        setActivePage(activePage + 1)
        onRequestHandler(activePage + 1)
    }

    // написать логику для стрелок влево вправо
    // чтобы двигали по массиву или создавали новый массив или хз

    let pagination: number[] = []

    for (let i = 0; i < 10; i++) {
        pagination.push(page++)
    }

    return <section className={style.pagination}>

        <LeftArrow className={style.left__arrow} onClick={onLeftArrowHandler} />

        <div className={style.pag__container}>
            {pagination.map(num =>
                <div onClick={() => onClickHandler(num)}
                    key={num}
                    className={activePage === num ? style.pag__value_active : style.pag__value}>
                    {num}
                </div>)}
        </div>

        <RightArrow className={style.right__arrow} onClick={onRightArrowHandler} />
    </section>
}
