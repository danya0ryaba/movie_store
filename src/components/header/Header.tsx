import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import style from './header.module.scss'
import logo from '../../assets/img/logo.png'
import { Auth } from '../auth/Auth'
import { SelectCustom } from '../select/SelectCustom'
import { useAuth } from '../../hook/useAuth'

export type Language = 'RU' | 'EN'

const arrayLanguage = ['RU', 'EN']

export const Header: React.FC = () => {

    // для селекта
    const [activeOption, setActiveOption] = React.useState('')

    const { isAuth, email } = useAuth()


    const [burgerMenu, setBurgerMenu] = React.useState(false)

    const onClickBurgerMenu = () => setBurgerMenu(!burgerMenu)


    return <div className={style.container}>

        <header className={style.header}>

            <Link to='/'><div className={style.header__logo}>
                <img src={logo} alt="logo" />
                <h1> Filmagnet </h1>
            </div></Link>

            <nav className={style.header__menu}>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} to={'/'}>главная</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} to={'/movie'}>кино</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} to={'/cartoon'}>мультфильмы</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} to={'/series'}>сериалы</NavLink>
            </nav>

            <Outlet />

            <div className={style.header__modes}>
                <Link to={'/auth'} className={style.header__modes_guest}>{isAuth ? email : 'гость'}</Link>
                <SelectCustom activeOption={activeOption} setActiveOption={setActiveOption} title='EN' option={arrayLanguage} />
                <Auth />
            </div>

        </header>

        {!burgerMenu && <div className={style.burger} onClick={onClickBurgerMenu} />}

        {burgerMenu && <div className={style.burger__menu}>

            <div onClick={onClickBurgerMenu} className={style.close}>
                <svg height="30px" version="1.1" viewBox="0 0 512 512" width="30px"  >
                    <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                </svg>
            </div>

            <nav className={style.burger__menu__menu}>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} onClick={onClickBurgerMenu} to={'/'}>главная</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} onClick={onClickBurgerMenu} to={'/movie'}>кино</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} onClick={onClickBurgerMenu} to={'/cartoon'}>мультфильмы</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? style.link_active : style.link}`} onClick={onClickBurgerMenu} to={'/series'}>сериалы</NavLink>
            </nav>

            <Outlet />

            <div className={style.burger__menu__modes}>
                <SelectCustom activeOption={activeOption} setActiveOption={setActiveOption} title='RU' option={arrayLanguage} />
                <Auth />
            </div>

        </div>}

    </div>
}
