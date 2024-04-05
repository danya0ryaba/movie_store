import React from 'react'
import style from './aboutfilm.module.scss'
import { GenresItem, RatingAndVotes } from '../../type/movie'
import { AudienceItem, Budget, CurrentFilm, Persons, Trailer } from '../../type/movieId'
import { PersonsLists } from '../persons/PersonsList'

export const AboutFilm: React.FC<CurrentFilm> = (props) => {

    const [modeView, setModeView] = React.useState(true)
    const [quantityPersons, setQuantityPersons] = React.useState(10)

    const personsSlice = props.persons?.slice(0, quantityPersons)

    const onViewAllPersons = () => {
        setModeView(!modeView)
        setQuantityPersons(props.persons.length)
    }

    const collapsePersons = () => {
        setModeView(!modeView)
        setQuantityPersons(10)
    }

    return <div className={style.about__film}>

        <div className={style.container__about}>

            <div className={style.video}>
                <div className={style.video__trailer}>
                    {props.videos?.trailers && props.videos.trailers.length > 0 ?
                        <iframe className={style.video__video} src={props.videos.trailers[0].url} allowFullScreen></iframe>
                        : 'трейлер отсутствует'}
                </div>
                <div className={style.description}>{props.description}</div>
            </div>

            <div className={style.info}>

                <div className={style.info__film}>
                    <span className={style.info__key}>Год производства</span>
                    <span className={style.info__value}>{props.year}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Страна</span>
                    <span className={style.info__value}>
                        {props.countries ? props.countries.map((c, ind, arr) => {
                            if (ind === arr.length - 1) return `${c.name}`
                            else return `${c.name}, `
                        }) : 'нету данных'}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Жанр</span><span className={style.info__value}>
                        {props.genres ? props.genres.map((genre, index, arr) => {
                            if (index === arr.length - 1) return `${genre.name}`
                            else return `${genre.name}, `
                        }) : 'нету данных'}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Бюджет</span>
                    <span className={style.info__value}>
                        {// props.budget && props.budget.value переписать как props.budget?.value?
                            props.budget && props.budget.value && props.budget.currency ?
                                `${props.budget?.value} ${props.budget?.currency}` :
                                'нет данных'}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Рейтинг IMDB</span>
                    <span className={style.info__value}>{props.rating ? props.rating.imdb : 'нету данных'}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Зрители</span>
                    <span className={style.info__value}>{props.audience ? props.audience.reduce((prev, cur) => (prev + cur.count), 0) : 'нету данных'}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Сборы</span>
                    <span className={style.info__value}>
                        {props.fees?.world?.value ? `${props.fees.world.value} ${props.fees.world?.currency}` : 'нету данных'}
                    </span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Возраст</span>
                    <span className={style.info__value}>{props.ageRating}+</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Время</span>
                    <span className={style.info__value}>{props.movieLength} мин</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Оригинальное название</span>
                    <span className={style.info__value}>{props.alternativeName ? props.alternativeName : props.name}</span>
                </div>

                <div className={style.info__film}>
                    <span className={style.info__key}>Логотип</span>
                    <span className={style.info__value}>
                        {props.logo ? <img style={{ width: '120px', height: '40px' }} src={`${props.logo.url}`} alt="логотип" />
                            : 'нету данных'}
                    </span>
                </div>

            </div>

            <div className={style.actor}>
                <h5 className={style.subtitle}>В главных ролях</h5>
                <PersonsLists persons={personsSlice} />
                {modeView ?
                    <span onClick={onViewAllPersons} className={style.more}>посмотреть всех</span> :
                    <span onClick={collapsePersons} className={style.more}>свернуть</span>
                }
            </div>

        </div>

    </div>
}