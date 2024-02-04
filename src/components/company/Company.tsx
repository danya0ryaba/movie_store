import React from 'react'
import style from './company.module.scss'
import company from '../../assets/img/company.png'

export const Company = () => {
    return <section className={style.company}>
        <div className={style.container}>
            <h1 className={style.title}>Company</h1>
            <div className={style.list__company}>
                <div className={style.item__company}><img src={company} alt="company" /></div>
                <div className={style.item__company}><img src={company} alt="company" /></div>
                <div className={style.item__company}><img src={company} alt="company" /></div>
                <div className={style.item__company}><img src={company} alt="company" /></div>
            </div>
        </div>
    </section>
}
