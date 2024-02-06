import React from 'react'
import style from './company.module.scss'
import { CompanyItem } from './companyitem/CompanyItem'
import { Title } from '../title/Title'

const companyItem = [1, 2, 3, 4]
export const Company = () => {
    return <section className={style.company}>
        <div className={style.container}>
            <Title>Company</Title>
            <div className={style.list__company}>
                {companyItem.map(company => <CompanyItem key={company} />)}
            </div>
        </div>
    </section>
}
