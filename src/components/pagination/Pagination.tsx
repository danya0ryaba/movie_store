import React from 'react'
import style from './pagination.module.scss'
import { ReactComponent as RightArrow } from '../../assets/img/right-arrow (1).svg'
import { ReactComponent as LeftArrow } from '../../assets/img/left-arrow (2).svg'
import { useResize } from '../../hook/useResize'

type PaginationType = {
    page: number,
    onRequestHandler: (page: number) => void
    filter?: any
}

export const Pagination: React.FC<PaginationType> = ({ page, onRequestHandler, filter }) => {

    let width = useResize()

    const [activePage, setActivePage] = React.useState(page)

    // надо придумать как избавиться от этого, не прокидывать фильтр в Pagination
    // но кажется избавиться от этого не получится тк надо будет переписывать фильтрацию
    React.useEffect(() => {
        setActivePage(1)
    }, [filter])

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

    let pagination: number[] = []
    if (width > 488) {
        for (let i = 0; i < 10; i++) {
            pagination.push(page++)
        }
    } else {
        for (let i = 0; i < 5; i++) {
            pagination.push(page++)
        }
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