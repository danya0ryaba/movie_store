import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>

            <div className="logo">
                <img id='logo' src="" alt="logo" />
                <label about='logo'>Filmagnet</label>
            </div>

            <nav className='menu'>
                <NavLink to={'/'}>HOME</NavLink>
                <NavLink to={'/'}>MOVIE</NavLink>
                <NavLink to={'/'}>TV SHOW</NavLink>
                <NavLink to={'/'}>WEB SERIES</NavLink>
                <NavLink to={'/'}>PRIMIUM</NavLink>
            </nav>

            {/* тут компонент search */}
            {/* тут компонент смены Языка */}
            {/* тут компонент Авторизвции */}
        </header>
    )
}
