import React, { useEffect } from 'react'
import style from './infofilm.module.scss'
import { Button } from '../button/Button'
import poster from '../../assets/img/poster_film.png'
import date from '../../assets/img/date.png'
import { ReactComponent as Send } from '../../assets/img/send.svg';
import { ReactComponent as Star } from '../../assets/img/star.svg';
import { useNavigate } from 'react-router-dom'
import { CurrentFilm } from '../../type/movieId'
import { useAppSelector } from '../../store/hooks/redux'
import { TypeMovie } from '../../type/movie'



export const InfoFilm: React.FC<CurrentFilm> = ({
    status,
    rating,
    votes,
    backdrop,
    movieLength,
    id,
    type,
    name,
    description,
    year,
    poster,
    genres,
    countries,
    typeNumber,
    alternativeName,
    enName,
    names,
    ratingMpaa,
    shortDescription,
    ticketsOnSale,
    ageRating,
    logo,
    top10,
    top250,
    isSeries,
    seriesLength,
    totalSeriesLength,

    externalId,
    distributors,
    premiere,
    slogan,
    facts,
    seasonsInfo,
    persons,
    images,
    lists,
    spokenLanguages,
    productionCompanies,
    budget,
    networks,
    subType,
    fees,
    updatedAt,
    imagesInfo,
    technology,
    similarMovies,
    sequelsAndPrequels,
    watchability,
    deletedAt,
    audience,
    videos
}) => {
    // убрать any
    const myType: any = {
        movie: 'фильме',
        ['tv-series']: 'сериале',
    }

    const currenType = myType[type]

    console.log(currenType);


    const navigate = useNavigate()

    const onClickBack = () => navigate(-1)

    const { isLoading } = useAppSelector(state => state.film)

    return <>
        {isLoading ? <h2 style={{ fontSize: '70px', color: '#fff' }}>Loading</h2> : <section className={style.section__film}>

            <div className={style.container}>

                <button className={style.back} onClick={onClickBack}> &#129044; Назад</button>

                <div className={style.card}>

                    <div className={style.card__trailer}>
                        <img src={poster?.previewUrl} alt="trailer film" />
                    </div>

                    <div className={style.card__info}>

                        <h1 className={style.movie__title}>{name}</h1>

                        <h2 className={style.movie__subtitle}>Свободный <span>просмотр</span></h2>

                        <div className={style.about_film}>
                            <div className={style.type}>{type}</div>
                            <div className={style.quality}>HD</div>
                            <div className={style.category}>Action, Drama, Adventure, Science fiction</div>
                            <div className={style.data}>
                                <img src={date} alt="date" />
                                <span>{year}</span>
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
                                    {/* <label htmlFor="#">{rating.imdb}</label> */}
                                </div>

                            </div>

                            <Button>Play Now</Button>

                        </div>

                        <p className={style.card__info__text}>
                            {shortDescription}
                        </p>

                    </div>

                </div>



                <div className={style.about__film}>

                    <h5 className={style.aboutFilm}>О фильме</h5>

                    <div className={style.container__about}>

                        <div className={style.video}>

                            <div className={style.video__trailer}>
                                <video className={style.video__video} src="">video</video>
                            </div>

                            <div className={style.description}>
                                {description}
                            </div>
                        </div>

                        <div className={style.info}>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Год производства</span>
                                <span className={style.info__value}>1999</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Страна</span>
                                <span className={style.info__value}>USA</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Жанр</span>
                                <span className={style.info__value}>драма, фэнтези, криминал</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Режиссер</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Сценарий</span>
                                <span className={style.info__value}>Фрэнк Дарабонт, Стивен Кинг</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Продюсер</span>
                                <span className={style.info__value}>Фрэнк Дарабонт, Дэвид Валдес</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Оператор</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Композитор</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Художник</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Монтаж</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Бюджет</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Маркетинг</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Зрители</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Премьера в мире</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Возраст</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                            <div className={style.info__film}>
                                <span className={style.info__key}>Время</span>
                                <span className={style.info__value}>Фрэнк Дарабонт</span>
                            </div>

                        </div>

                        <div className={style.actor}>

                            <h5 className={style.subtitle}>В главных ролях</h5>

                            <ul className={style.list}>
                                <li className={style.list__actor}>
                                    <a href="">Том Хэнкс</a>
                                    <div className="popup" style={{ display: 'none' }}></div>
                                </li>
                                <li className={style.list__actor}>
                                    <a href="">Том Хэнкс</a>
                                    <div className="popup" style={{ display: 'none' }}></div>
                                </li>
                                <li className={style.list__actor}>
                                    <a href="">Том Хэнкс</a>
                                    <div className="popup" style={{ display: 'none' }}></div>
                                </li>
                                <li className={style.list__actor}>
                                    <a href="">Том Хэнкс</a>
                                    <div className="popup" style={{ display: 'none' }}></div>
                                </li>
                                <li className={style.list__actor}>
                                    <a href="">Том Хэнкс</a>
                                    <div className="popup" style={{ display: 'none' }}></div>
                                </li>
                                <li className={style.list__actor}>
                                    <a href="">Том Хэнкс</a>
                                    <div className="popup" style={{ display: 'none' }}></div>
                                </li>
                            </ul>

                            <span className={style.more}><a href="">посмотреть всех</a></span>

                        </div>

                    </div>

                </div>

            </div>

        </section>}
    </>
}
