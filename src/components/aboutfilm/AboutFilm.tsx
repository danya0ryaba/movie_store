import React from 'react'
import style from './aboutfilm.module.scss'
import { useAppSelector } from '../../store/hooks/redux'



export const AboutFilm = () => {

    const { film, isLoading } = useAppSelector(state => state.film)

    // const myType: any = {
    //     ['movie']: 'фильме',
    //     ['tv-series']: 'сериале',
    //     ['cartoon']: 'мультфильме',
    //     ['anime']: 'аниме'
    // }
    // const currenType = myType[type]



    return isLoading ? <h1>Loading</h1> :
        <div className={style.about__film}>

            {/* <h5 className={style.aboutFilm}>О {currenType}</h5> */}

            <div className={style.container__about}>

                <div className={style.video}>

                    <div className={style.video__trailer}>
                        <video className={style.video__video} src="">video</video>
                    </div>

                    <div className={style.description}>
                        {film.description}
                    </div>
                </div>

                <div className={style.info}>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Год производства</span>
                        <span className={style.info__value}>{film.year}</span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Страна</span>
                        <span className={style.info__value}>

                            {film.countries.length > 0 ? film.countries.map((c, ind, arr) => {
                                if (ind === arr.length - 1) return `${c.name}`
                                else return `${c.name}, `
                            }) : false}

                        </span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Жанр</span>
                        <span className={style.info__value}>
                            {film.genres.length > 0 ?
                                film.genres.map((genre, index, arr) => {
                                    if (index === arr.length - 1) return `${genre.name}`
                                    else return `${genre.name}, `
                                }) : false}
                        </span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Бюджет</span>
                        <span className={style.info__value}>{`${film.budget.value} ${film.budget.currency}`}</span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Рейтинг IMDB</span>
                        <span className={style.info__value}>{film.rating.imdb}</span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Зрители</span>
                        <span className={style.info__value}>
                            {film.audience.reduce((prev, cur) => {
                                return prev + cur.count
                            }, 0)}
                        </span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Сборы</span>
                        <span className={style.info__value}>{`${film.fees.world.value} ${film.fees.world.currency}`} </span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Возраст</span>
                        <span className={style.info__value}>{film.ageRating}+</span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Время</span>
                        <span className={style.info__value}>{film.movieLength} мин</span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Оригинальное название</span>
                        <span className={style.info__value}>{film.alternativeName}</span>
                    </div>

                    <div className={style.info__film}>
                        <span className={style.info__key}>Логотип</span>
                        <span className={style.info__value}>
                            <img style={{ width: '120px', height: '40px' }} src={`${film.logo.url}`} alt="logo" />
                        </span>
                    </div>

                </div>

                <div className={style.actor}>

                    <h5 className={style.subtitle}>В главных ролях</h5>

                    <ul className={style.list}>

                        {film.persons.slice(0, 10).map((man, i, arr) => {
                            return (<li key={man.id} className={style.list__actor}>
                                <a href="">{man.name}</a>
                                <div className="popup" style={{ display: 'none' }}></div>
                            </li>)
                        })}

                    </ul>

                    <span className={style.more}><a href="">посмотреть всех</a></span>

                </div>

            </div>

        </div>
}
