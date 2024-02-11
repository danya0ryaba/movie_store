import React from 'react'
import style from './pagination.module.scss'
import { ReactComponent as RightArrow } from '../../assets/img/right-arrow (1).svg'
import { ReactComponent as LeftArrow } from '../../assets/img/left-arrow (2).svg'

let pagination: number[] = []
for (let i = 1; i < 10; i++) {
    pagination.push(i)
}

export const Pagination: React.FC = () => {

    return <section className={style.pagination}>

        <LeftArrow className={style.left__arrow} />
        <div className={style.pag__container}>
            {pagination.map(num => <div key={num} className={style.pag__value}>{num}</div>)}
        </div>
        <RightArrow className={style.right__arrow} />
    </section>
}
