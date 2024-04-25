import React from 'react'
import style from './personcard.module.scss'
import { Link } from 'react-router-dom'
import { Persons } from '../../../type/movieId'

export const PersonCard: React.FC<Persons> = (props) => {

    return <div className={style.popup}>

        <div className={style.person__photo}>
            <img src={props.photo} alt="фото актера" />
        </div>

        <div className={style.person__info}>
            <h2 className={style.name}>
                {props.name}
                <br />
                {props.enName}
            </h2>
            <span className={style.profession}>{props.profession}</span>
            <span className={style.profession}>роль: {props.description}</span>
            <Link to={`/person/${props.id}`} className={style.moreBtn}>узнать больше</Link>
        </div>

    </div >
}