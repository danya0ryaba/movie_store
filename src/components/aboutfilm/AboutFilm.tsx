import React from 'react'
import style from './aboutfilm.module.scss'
import { GenresItem, RatingAndVotes } from '../../type/movie'
import { AudienceItem, Budget, Persons, Trailer } from '../../type/movieId'

type AboutFilmType = {
    name: string
    description: string | null,
    year: number,
    countries: [{ name: string }],
    genres: GenresItem[],
    budget: Budget,
    rating: RatingAndVotes,
    audience: AudienceItem[],
    fees: { world: { value: number | null, currency: string | null } },
    ageRating: number | null,
    movieLength: number | null,
    alternativeName: string | null,
    logo: { url: string | null },
    persons: Persons[],
    videos: { trailers: Trailer[] }
}


export const AboutFilm: React.FC<AboutFilmType> = ({
    name,
    description,
    year,
    countries,
    genres,
    budget,
    rating,
    audience,
    fees,
    ageRating,
    movieLength,
    alternativeName,
    logo,
    persons,
}) => {


    // const { film } = useAppSelector(state => state.film)

    // const myType: any = {
    //     ['movie']: 'фильме',
    //     ['tv-series']: 'сериале',
    //     ['cartoon']: 'мультфильме',
    //     ['anime']: 'аниме'
    // }
    // const currenType = myType[type]



    return <div className={style.about__film}>

        {/* <h5 className={style.aboutFilm}>О {currenType}</h5> */}

        <div className={style.container__about}>

            <div className={style.video}>

                <div className={style.video__trailer}>
                    <video className={style.video__video} src="">video</video>
                </div>

                <div className={style.description}>{description}</div>

            </div>

            <div className={style.info}>

                <div className={style.info__film}>
                    <span className={style.info__key}>Год производства</span>
                    <span className={style.info__value}>{year}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Страна</span>
                    <span className={style.info__value}>
                        {/* {countries.length > 0 ? countries.map((c, ind, arr) => {
                            if (ind === arr.length - 1) return `${c.name}`
                            else return `${c.name}, `
                        }) : false} */}
                        {/* {countries.length > 0 && countries[0].name} */}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Жанр</span>
                    <span className={style.info__value}>
                        {/* {film.genres.length > 0 ?
                                film.genres.map((genre, index, arr) => {
                                    if (index === arr.length - 1) return `${genre.name}`
                                    else return `${genre.name}, `
                                }) : false} */}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Бюджет</span>
                    {/* <span className={style.info__value}>{`${film.budget.value} ${film.budget.currency}`}</span> */}
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Рейтинг IMDB</span>
                    {/* <span className={style.info__value}>{rating.imdb}</span> */}
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Зрители</span>
                    <span className={style.info__value}>
                        {/* {film.audience.reduce((prev, cur) => {
                                return prev + cur.count
                            }, 0)} */}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Сборы</span>
                    {/* <span className={style.info__value}>{fees.world.value !== null ? fees.world.value : false}</span> */}
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Возраст</span>
                    <span className={style.info__value}>{ageRating}+</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Время</span>
                    <span className={style.info__value}>{movieLength} мин</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Оригинальное название</span>
                    <span className={style.info__value}>{alternativeName ? alternativeName : name}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Логотип</span>
                    <span className={style.info__value}>
                        {/* <img style={{ width: '120px', height: '40px' }} src={`${film.logo.url}`} alt="logo" /> */}
                    </span>
                </div>

            </div>

            <div className={style.actor}>

                <h5 className={style.subtitle}>В главных ролях</h5>

                <ul className={style.list}>

                    {persons.slice(0, 10).map((man, i, arr) => {
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
