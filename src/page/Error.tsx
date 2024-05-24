import React from 'react'
import style from './error.module.scss'
import { useNavigate } from 'react-router-dom'

const Error: React.FC = () => {

    const navigate = useNavigate()
    const onClickBack = () => navigate(-1)

    return <section className={style.error}>
        <h1 className={style.error__title}>Ошибка</h1>
        <div onClick={onClickBack} className={style.back}>&#129044; Вернуться назад</div>
    </section>
}

export default Error