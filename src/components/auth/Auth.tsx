import React from 'react'
import { Button } from '../button/Button'
import style from './auth.module.scss'
import { Link } from 'react-router-dom'

export const Auth = () => {
    return <div className={style.auth}>
        <Button><Link to={'/auth'}>войти</Link></Button>
    </div>
}
