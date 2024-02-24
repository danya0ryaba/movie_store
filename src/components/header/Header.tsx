import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import style from './header.module.scss'
import { Search } from '../search/Search'
import logo from '../../assets/img/logo.png'
import { Auth } from '../auth/Auth'
import { SelectCustom } from '../select/SelectCustom'

export type Language = 'RU' | 'EN'

const arrayLanguage = ['RU', 'EN']

export const Header = () => {
    return <div className={style.container}>

        <header className={style.header}>

            <Link to='/'>
                <div className={style.header__logo}>
                    <img src={logo} alt="logo" />
                    <h1> Filmagnet </h1>
                </div>
            </Link>

            <nav className={style.header__menu}>
                <NavLink className={style.link} to={'/'}>главная</NavLink>
                <NavLink className={style.link} to={'/movie'}>кино</NavLink>
                <NavLink className={style.link} to={'/tv'}>мультфильмы</NavLink>
                <NavLink className={style.link} to={'/series'}>сериалы</NavLink>
            </nav>

            <Outlet />

            <div className={style.header__modes}>
                <Search />
                <SelectCustom title='EN' option={arrayLanguage} />
                <Auth />
            </div>

        </header>

    </div>
}
