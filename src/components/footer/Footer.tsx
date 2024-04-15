import React from 'react'
import style from './footer.module.scss'

export const Footer = () => {
    return <footer className={style.footer}>
        <div className={style.container}>
            <nav className={style.navigate}>
                <ul className={style.navigate__list}>
                    <li className={style.link_menu}>О нас</li>
                    <li className={style.link_menu}>Блог</li>
                    <li className={style.link_menu}>Контакты</li>
                    <li className={style.link_menu}>Ошибки</li>
                    <li className={style.link_menu}>Ответственность</li>
                </ul>
            </nav>
        </div>
    </footer>
}
