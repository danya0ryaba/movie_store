import React from 'react'
import style from './error.module.scss'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'

const Error: React.FC = () => {

    const navigate = useNavigate()

    return <section className={style.error}>
        <h1 className={style.error__title}>Ошибка</h1>
        <div onClick={() => navigate(-1)} className={style.back}>&#129044; Вернуться назад</div>
        <Footer />
    </section>
}

export default Error