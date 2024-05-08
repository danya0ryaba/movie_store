import React from 'react'
import s from './portal.module.scss'
import { createPortal } from 'react-dom';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

const portal = document.getElementById('portal')

type PortalType = {
    onClose: () => void
}

export const Portal: React.FC<PortalType> = ({ onClose }) => {
    return createPortal(<div className={s.portal}>
        <div className={s.portal__close}>
            <svg onClick={onClose} className={s.close} height="30px" version="1.1" viewBox="0 0 512 512" width="30px"  >
                <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
            </svg>
            <h2 className={s.title}>Внимание!</h2>
            <p className={s.subtitle}>Необходимо авторизоваться</p>
            <div className={s.buttons}>
                <span className={s.buttons__btn}>
                    <Button><Link to={'/auth'}>Войти</Link></Button>
                </span>
                <span className={s.buttons__btn}>
                    <Button><Link to={'/auth'}>Зарегистрироваться</Link></Button>
                </span>
            </div>
            <span className={s.forgot}>Забили пароль?</span>
        </div>
    </div>, portal!)
}