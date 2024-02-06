import React from 'react'
import style from './companyitem.module.scss'
import company from '../../../assets/img/company.png'

export const CompanyItem = () => {
    return <div className={style.item__company}><img src={company} alt="company" /></div>
}
