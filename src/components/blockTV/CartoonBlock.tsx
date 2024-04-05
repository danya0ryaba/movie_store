import React from 'react'
import style from './tvblock.module.scss'
import { CartoonItem } from './CartoonItem'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { Pagination } from '../pagination/Pagination'
import { getCartoon } from '../../store/cartoon/cartoonSlice'
import { Loader } from '../loader/Loader'


export const CartoonBlock: React.FC = () => {

    const { cartoon, page, isLoading, error } = useAppSelector(state => state.cartoon);

    const dispatch = useAppDispatch()

    const onRequestCartoon = (page: number) => dispatch(getCartoon(page))

    return <section className={style.tv}>
        <div className={style.tv__container}>
            {isLoading ? <Loader /> : <>
                {cartoon.map(cartoon =>
                    <Link style={{ marginBottom: '10px' }} key={cartoon.id} to={`${cartoon.id}`}>
                        <CartoonItem key={cartoon.id} {...cartoon} />
                    </Link>)}
            </>}
        </div>
        <Pagination page={page} onRequestHandler={onRequestCartoon} />
    </section>
}
