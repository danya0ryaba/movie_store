import React from 'react'
import style from './person.module.scss'
import { PersonCard } from '../personcard/PersonCard'

export type PersonType = {
    readonly name: string,
    readonly enName: string | null,
    readonly id: number,
    readonly photo: string,
    readonly profession: string
}

export const Person: React.FC<PersonType> = ({
    name,
    enName,
    id,
    photo,
    profession,
}) => {

    const [classList, setClassList] = React.useState(false)

    const handleMouseEnter = () => {
        setClassList(!classList)
    }

    const handleMouseLeave = () => {
        setClassList(!classList)
    }

    return <li className={style.list__actor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {name}
        <div className={style.forPosition}>
            {classList && <PersonCard
                name={name}
                enName={enName}
                id={id}
                photo={photo}
                profession={profession} />}
        </div>
    </li>
}
