import React from 'react'
import { Button } from '../button/Button'
import style from './auth.module.scss'

export const Auth = () => {
    return <div className={style.auth}>
        <Button>войти</Button>
    </div>
}
