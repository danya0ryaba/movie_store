import React from 'react'
import style from './footer.module.scss'

export const Footer = () => {
    return <footer className={style.footer}>
        <div className={style.container}>
            <nav className={style.navigate}>
                <ul className={style.navigate__list}>
                    <li className={style.link_menu}>About us</li>
                    <li className={style.link_menu}>Vlog</li>
                    <li className={style.link_menu}>Contact</li>
                    <li className={style.link_menu}>Report broken links</li>
                    <li className={style.link_menu}>Disclaimer</li>
                </ul>
            </nav>
        </div>
    </footer>
}
