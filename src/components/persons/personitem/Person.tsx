import React from 'react'
import style from './person.module.scss'

type PersonType = {
    readonly name: string,
    readonly enName: string | null,
    readonly id: number,
    readonly photo: string,
    readonly profession: string
}

// повесить событие мыши и при наведении на list__actor
// показывать мини-карточку чувака (popup)
export const Person: React.FC<PersonType> = ({
    name,
    enName,
    id,
    photo,
    profession,
}) => {
    return <li className={style.list__actor}>
        <a href="">{name}</a>
        <div className="popup" style={{ display: 'none' }}></div>
    </li>
}
