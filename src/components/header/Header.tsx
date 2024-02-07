import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'
import { Search } from '../search/Search'
import logo from '../../assets/img/logo.png'
import { Auth } from '../auth/Auth'
import { SelectCustom } from '../select/SelectCustom'

export const Header = () => {
    return <div className={style.container}>

        <header className={style.header}>

            <div className={style.header__logo}>
                <img src={logo} alt="logo" />
                <h1> <a href="">Filmagnet</a> </h1>
            </div>

            <nav className={style.header__menu}>
                <NavLink className={style.link} to={'/'}>HOME</NavLink>
                <NavLink className={style.link} to={'/'}>MOVIE</NavLink>
                <NavLink className={style.link} to={'/'}>TV SHOW</NavLink>
                <NavLink className={style.link} to={'/'}>WEB SERIES</NavLink>
                <NavLink className={style.link} to={'/'}>PRIMIUM</NavLink>
            </nav>

            <div className={style.header__modes}>
                <Search />
                <SelectCustom />
                <Auth />
            </div>

        </header>

    </div>
}
