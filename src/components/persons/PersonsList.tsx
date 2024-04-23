import React from 'react'
import { Persons } from '../../type/movieId'
import { Person } from './personitem/Person'
import style from './personslist.module.scss'

type PersonsType = {
    persons: Persons[],
}

export const PersonsLists: React.FC<PersonsType> = ({ persons }) => {

    return persons ? <ul className={style.list}>
        {persons.map(man => <Person key={man.id} {...man} />)}
    </ul>
        : <h3>Нету данных</h3>
}