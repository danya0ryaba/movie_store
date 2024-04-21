import React from 'react'
import { Persons } from '../../type/movieId'
import { Person } from './personitem/Person'

type PersonsType = {
    persons: Persons[],
}

export const PersonsLists: React.FC<PersonsType> = ({ persons }) => {
    return persons ? <ul>{persons.map(man => <Person key={man.id} {...man} />)}</ul>
        : <h3>Нету данных</h3>
}