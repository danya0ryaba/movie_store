import React, { useCallback } from 'react'
import style from './fullscreen.module.scss'
import { Button } from '../button/Button'
import date from '../../assets/img/date.png'
import { Portal } from '../Portal/Portal'
import { useAuth } from '../../hook/useAuth'
import { motion } from 'framer-motion'

export const FullScreen: React.FC = () => {

    const { isAuth } = useAuth()

    const [popup, setPopup] = React.useState(false)

    const onClose = useCallback(() => setPopup(false), [setPopup])

    const onClick = useCallback(() => {
        if (!isAuth) setPopup(true)
        else alert("Спасибо, что авторизовались, но это бутафорский сайт")
    }, [setPopup, isAuth])

    return <div className={style.fullscreen}>
        <div className={style.fullscreen__gradient}>
            <motion.div
                initial={{
                    x: -1200,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    type: "spring",
                    duration: 1
                }}
                className={style.fullscreen__info}>
                <h2 className={style.title}>Filmagnet</h2>
                <h3 className={style.subtitle}>
                    Безлимитные <span>развлечения</span>, Фильмы,
                    телепередачи и многое другое
                </h3>
                <div className={style.about_film}>
                    <div className={style.type}>Фильмы</div>
                    <div className={style.quality}>HD</div>
                    <div className={style.category}>Множество жанров</div>
                    <div className={style.data}>
                        <img src={date} alt="date" />
                        <span>2024</span>
                    </div>
                </div>
                <Button onClick={onClick}>смотреть сейчас</Button>
                {popup && <Portal onClose={onClose} />}
            </motion.div>
        </div>
    </div>
}