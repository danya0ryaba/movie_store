import React from 'react'
import style from './infofilm.module.scss'
import { Button } from '../button/Button'
import date from '../../assets/img/date.png'
import { ReactComponent as Send } from '../../assets/img/send.svg';
import { ReactComponent as Star } from '../../assets/img/star.svg';
import { Link, useNavigate } from 'react-router-dom'
import { CurrentFilm } from '../../type/movieId'
import { AboutFilm } from '../aboutfilm/AboutFilm';
import { Portal } from '../Portal/Portal';

export const InfoFilm: React.FC<CurrentFilm> = (props) => {

    const [modePortal, setModePortal] = React.useState(false)

    const navigate = useNavigate()

    const onClickBack = () => navigate(-1)

    const onClose = () => setModePortal(false)

    const onClick = () => setModePortal(true)

    return <section className={style.section__film}>
        <div className={style.container}>
            <button className={style.back} onClick={onClickBack}> &#129044; Назад</button>
            <div className={style.card}>

                <Link to={props.videos?.trailers && props.videos.trailers.length > 0 ? `${props.videos.trailers[0].url}` : 'https://www.youtube.com/'}
                    className={style.card__trailer}>
                    <img src={props.poster?.previewUrl} alt="trailer film" />
                </Link>

                <div className={style.card__info}>
                    <h1 className={style.movie__title}>{props.name}</h1>
                    <h2 className={style.movie__subtitle}>Свободный <span>просмотр</span></h2>
                    <div className={style.about_film}>
                        <div className={style.type}>{props.type}</div>
                        <div className={style.quality}>HD</div>

                        <div className={style.category}>
                            {props.genres && props.genres.length > 0 ? props.genres.map((g, ind, arr) => {
                                if (ind === arr.length - 1) return `${g.name}`
                                else return `${g.name}, `
                            }) : 'нет информации'}
                        </div>

                        <div className={style.data}>
                            <img src={date} alt="date" />
                            <span>{props.year}</span>
                        </div>
                    </div>
                    <div className={style.movie__rating}>

                        <div className={style.send}>
                            <Send />
                            <span className={style.send__text}>Поделиться</span>
                        </div>

                        <div className={style.rating}>
                            <h3 className={style.rating__title}>Оценить</h3>
                            <div className={style.grade}>
                                <Star className={style.star} />
                                <label htmlFor="#">{props.rating?.imdb}</label>
                            </div>
                        </div>

                        <Button onClick={onClick}>смотреть</Button>
                        {modePortal ? <Portal onClose={onClose} /> : false}
                    </div>
                    <p className={style.card__info__text}>{props.shortDescription}</p>
                </div>
            </div>

            <AboutFilm {...props} />
        </div>
    </section>
}