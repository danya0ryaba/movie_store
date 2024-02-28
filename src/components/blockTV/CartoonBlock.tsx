import React from 'react'
import style from './tvblock.module.scss'
import { CartoonItem } from './CartoonItem'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/redux'

export const CartoonBlock = () => {

    const { cartoon, isLoading, error } = useAppSelector(state => state.cartoon);

    return <section className={style.tv}>
        <div className={style.tv__container}>
            {cartoon.map(cartoon => (<Link style={{ marginBottom: '10px' }} key={cartoon.id} to={`${cartoon.id}`}>
                <CartoonItem key={cartoon.id} {...cartoon} />
            </Link>))}
        </div>
    </section>
}
