import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                <NavLink className={style.link} to={'/'}>HOME</NavLink>
                <NavLink className={style.link} to={'/films'}>MOVIE</NavLink>
                <NavLink className={style.link} to={'/'}>TV SHOW</NavLink>
                <NavLink className={style.link} to={'/series'}>series</NavLink>
                <NavLink className={style.link} to={'/'}>PRIMIUM</NavLink>
            </nav>

            <div className={style.header__modes}>
                <Search />
                <SelectCustom title='EN' option={arrayLanguage} />
                <Auth />
            </div>

        </header>

    </div>
}
