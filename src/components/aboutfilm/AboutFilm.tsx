import React from 'react'
import style from './aboutfilm.module.scss'
import { GenresItem, RatingAndVotes } from '../../type/movie'
import { AudienceItem, Budget, Persons, Trailer } from '../../type/movieId'
import { PersonsLists } from '../persons/PersonsList'

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
    videos
}) => {

    return <div className={style.about__film}>

        <div className={style.container__about}>

            <div className={style.video}>
                <div className={style.video__trailer}>
                    {videos?.trailers && videos.trailers.length > 0 ?
                        <iframe className={style.video__video} src={videos.trailers[0].url} allowFullScreen></iframe>
                        : 'трейлер отсутствует'}
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
                        {countries ? countries.map((c, ind, arr) => {
                            if (ind === arr.length - 1) return `${c.name}`
                            else return `${c.name}, `
                        }) : 'нету данных'}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Жанр</span><span className={style.info__value}>
                        {genres ? genres.map((genre, index, arr) => {
                            if (index === arr.length - 1) return `${genre.name}`
                            else return `${genre.name}, `
                        }) : 'нету данных'}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Бюджет</span>
                    <span className={style.info__value}>
                        {
                            budget && budget.value && budget.currency ?
                                `${budget?.value} ${budget?.currency}` :
                                'нет данных'
                        }
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Рейтинг IMDB</span>
                    <span className={style.info__value}>{rating ? rating.imdb : 'нету данных'}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Зрители</span>
                    <span className={style.info__value}>{audience ? audience.reduce((prev, cur) => (prev + cur.count), 0) : 'нету данных'}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Сборы</span>
                    <span className={style.info__value}>
                        {fees?.world?.value ? `${fees.world.value} ${fees.world?.currency}` : 'нету данных'}
                    </span>
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
                        {logo ? <img style={{ width: '120px', height: '40px' }} src={`${logo.url}`} alt="логотип" />
                            : 'нету данных'}
                    </span>
                </div>

            </div>

            <div className={style.actor}>
                <h5 className={style.subtitle}>В главных ролях</h5>
                <PersonsLists persons={persons} />
            </div>

        </div>

    </div>
}
