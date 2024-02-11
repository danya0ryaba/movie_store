import React from 'react'
import style from './film.module.scss'
import camera from '../../assets/img/camera.png'
// import grade_star from '../../assets/img/grade_star.png'
// import { ReactComponent as Send } from '../../assets/img/send.svg'

export const Film: React.FC = () => {

    return <div className={style.card__film}>

        <div className={style.container}>

            <div className={style.card}>

                <div className={style.card__info}>

                    <span className={style.number}>1</span>

                    <div className={style.poster}>
                        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/72x108" alt="poster" />
                    </div>

                    <div className={style.info}>
                        <h4 className={style.title}>Зеленая миля</h4>
                        <span className={style.aboutFilm}>
                            США драма Режиссер: 'Френк Дарабонт'
                        </span>
                        <button className={style.trailer}>
                            <img className={style.camera} src={camera} alt="camera" />
                            <span>Трейлер</span>
                        </button>
                    </div>
                </div>



                <div className={style.card__rating}>

                    <span className={style.rating__value}>9.1</span>

                    <span className={style.view}>112 345</span>

                    <button className={style.view_btn}>Буду смотреть</button>


                </div>

                {/* <span className={style.grade}>
                    <img className={style.grade__star} src={grade_star} alt="grade star" />
                </span>

                <span className={style.send}>
                    <Send style={{ fill: 'black', backgroundColor: 'red', width: '20px', height: '20px' }} />
                </span> */}

            </div>
        </div>
    </div>
}
