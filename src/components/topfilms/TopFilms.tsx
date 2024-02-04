import React from 'react'
import style from './topfilms.module.scss'
import topfilm from '../../assets/img/top_film.png'

export const TopFilms = () => {
    return <>
        <h2 className={style.title}>top films</h2>
        <section className={style.top__films}>

            <ul className={style.films}>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                {/* <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li>
                <li className={style.item__film}><img src={topfilm} alt="list top films" /></li> */}
            </ul>
        </section>
    </>
}
