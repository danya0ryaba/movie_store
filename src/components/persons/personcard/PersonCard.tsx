import React from 'react'
import style from './personcard.module.scss'
import { PersonType } from '../personitem/Person'

export const PersonCard: React.FC<PersonType> = ({
    name,
    enName,
    id,
    photo,
    profession,
}) => {
    return (
        <div className={style.popup}>

            <div className={style.person__photo}>
                <img src={photo} alt="фото актера" />
            </div>

            <div className={style.person__info}>
                <h2 className={style.name}>{name}</h2>
                <span className={style.profession}>{profession}</span>
                <button className={style.more}>узнать больше</button>
            </div>

        </div>
    )
}
