import React, { useCallback } from 'react'
import style from './infofilm.module.scss'
import { Button } from '../button/Button'
import date from '../../assets/img/date.png'
import { ReactComponent as Send } from '../../assets/img/send.svg';
import { ReactComponent as StarSvg } from '../../assets/img/star.svg';
import { Link, useNavigate } from 'react-router-dom'
import { CurrentFilm } from '../../type/movieId'
import { AboutFilm } from '../aboutfilm/AboutFilm';
import { Portal } from '../Portal/Portal';
import { Star } from '../star/Star';
import { useAuth } from '../../hook/useAuth';
import { splitTheWord } from '../../utils/splitStringUsingRegex';
import { motion } from 'framer-motion';
import { Footer } from '../footer/Footer';

const gradeForFilms = [1, 2, 3, 4, 5]

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
}

export const InfoFilm: React.FC<CurrentFilm> = (props) => {
    // for animation props.name
    let trueNameChars: string[] = [];
    if (props.name) trueNameChars = splitTheWord(props.name);

    const { isAuth } = useAuth()
    // for popup
    const [modePortal, setModePortal] = React.useState(false)
    const changeModePortal = useCallback(() => {
        if (!isAuth) setModePortal(prev => !prev)
        else alert("Спасибо, что авторизовались, но это бутафорский сайт")
    }, [isAuth, setModePortal])
    // come back
    const navigate = useNavigate()
    const onClickBack = () => navigate(-1)
    // show stars for rating
    const [grade, setGrade] = React.useState(false)
    const onGrading = useCallback(() => setGrade(true), [setGrade])
    const onMouseLeaveFilm = useCallback(() => setGrade(false), [setGrade])
    // for estimate
    const [rating, setRating] = React.useState(0)

    return <section className={style.section__film}>
        <div className={style.container}>
            <button className={style.back} onClick={onClickBack}> &#129044; Назад</button>
            <div className={style.card}>
                <Link to={props.videos?.trailers && props.videos.trailers.length > 0 ? `${props.videos.trailers[0].url}` : 'https://www.youtube.com/'}
                    className={style.card__trailer}>
                    <img src={props.poster?.previewUrl ? props.poster?.previewUrl : 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg'} alt="trailer film" />
                </Link>
                <div className={style.card__info}>
                    <motion.h1 transition={{ staggerChildren: 0.08 }} initial="hidden" whileInView="reveal" className={style.movie__title} >
                        {trueNameChars.map((char, index) => {
                            return <motion.span key={index}
                                transition={{ duration: 0.5 }}
                                variants={charVariants}>{char}</motion.span>
                        })}
                    </motion.h1>
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
                            <div className={style.grade} onMouseEnter={onGrading}>
                                <StarSvg className={style.star} />
                                <label htmlFor="#">{props.rating?.imdb}</label>
                            </div>
                            {grade && <div className={style.my_grade} onMouseLeave={onMouseLeaveFilm}>
                                {gradeForFilms.map((star, i) => <Star
                                    key={i}
                                    onCloseRating={onMouseLeaveFilm}
                                    selected={rating > star}
                                    setGradeValue={setRating}
                                    starValue={star}
                                />)}
                            </div>}
                        </div>

                        <Button onClick={changeModePortal}>смотреть</Button>

                        {modePortal && <Portal onClose={changeModePortal} />}

                    </div>
                    <p className={style.card__info__text}>{props.shortDescription}</p>
                </div>
            </div>
            <AboutFilm {...props} />
        </div>
        <Footer />
    </section>
}