import React from 'react'
import style from './person.module.scss'
import { PersonCard } from '../personcard/PersonCard'
import { Persons } from '../../../type/movieId'

export type PersonType = {
    readonly name: string,
    readonly enName: string | null,
    readonly id: number,
    readonly photo: string,
    readonly profession: string
}

export const Person: React.FC<Persons> = (props) => {

    const [classList, setClassList] = React.useState(false)

    const handleMouseEnter = () => setClassList(!classList)

    const handleMouseLeave = () => setClassList(!classList)

    return <li className={style.list__actor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {props.name}
        <div className={style.forPosition}>
            {classList && <PersonCard {...props} />}
        </div>
    </li>
}
