import React from 'react'
import style from './infofilm.module.scss'
import { Button } from '../button/Button'
import date from '../../assets/img/date.png'
import trailer from '../../assets/img/trailer.png'
import { ReactComponent as Send } from '../../assets/img/send.svg';
import { ReactComponent as Star } from '../../assets/img/star.svg';
import { useNavigate } from 'react-router-dom'

export const InfoFilm = () => {

    const navigate = useNavigate()

    const onClickBack = () => navigate(-1)


    return (<section className={style.section__film}>

        <div className={style.container}>

            <button className={style.back} onClick={onClickBack}> &#129044; Back</button>

            <div className={style.card}>

                <div className={style.card__trailer}>
                    <img src={trailer} alt="trailer film" />
                </div>

                <div className={style.card__info}>

                    <h1 className={style.movie__title}>NEW EPISODES</h1>

                    <h2 className={style.movie__subtitle}>Free <span>Guy</span></h2>

                    <div className={style.about_film}>
                        <div className={style.type}>Movie</div>
                        <div className={style.quality}>HD</div>
                        <div className={style.category}>Action, Drama, Adventure, Science fiction</div>
                        <div className={style.data}>
                            <img src={date} alt="date" />
                            <span>2023</span>
                        </div>
                    </div>


                    <div className={style.movie__rating}>

                        <div className={style.send}>
                            <Send />
                            <span className={style.send__text}>Share</span>
                        </div>

                        <div className={style.rating}>
                            <h3 className={style.rating__title}>Rate The Show</h3>

                            <div className={style.grade}>
                                <Star className={style.star} />
                                <label htmlFor="#">7.0</label>
                            </div>

                        </div>

                        <Button>Play Now</Button>

                    </div>

                    <p className="card__info__text">
                        Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character (NPC) in Free City who is initially unaware that he is a video game character.
                    </p>

                </div>
            </div>

        </div>
    </section>
    )
}
