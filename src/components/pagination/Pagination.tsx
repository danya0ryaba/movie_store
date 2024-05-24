import React from 'react'
import style from './pagination.module.scss'
import { ReactComponent as RightArrow } from '../../assets/img/right-arrow (1).svg'
import { ReactComponent as LeftArrow } from '../../assets/img/left-arrow (2).svg'
import { useResize } from '../../hook/useResize'
import { createPag } from '../../utils/pag'

type PaginationType = {
    page: number,
    onRequestHandler: (page: number) => void
    filter?: string
}

export const Pagination: React.FC<PaginationType> = ({ page, onRequestHandler, filter }) => {

    const width = useResize()

    const [activePage, setActivePage] = React.useState(page)

    const [pagination, setPagination] = React.useState<number[]>(createPag(1, width))

    // React.useEffect(() => {
    //     setPagination(createPag(1))
    //     setActivePage(1)
    //     onRequestHandler(1)
    // }, [filter])

    const onClickHandler = (num: number) => {
        setPagination(createPag(num, width))
        setActivePage(num)
        onRequestHandler(num)
    }

    const onLeftArrowHandler = () => {
        const num = activePage - 1
        if (num < 1) return
        setPagination(createPag(num, width))
        setActivePage(num)
        onRequestHandler(num)
    }

    const onRightArrowHandler = () => {
        const num = activePage + 1
        setPagination(createPag(num, width))
        setActivePage(num)
        onRequestHandler(num)
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