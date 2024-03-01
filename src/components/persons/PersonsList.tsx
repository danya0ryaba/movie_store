import React from 'react'
import style from './persons.module.scss'
import { Persons } from '../../type/movieId'
import { Person } from './personitem/Person'

type PersonsType = {
    persons: Persons[],
}

export const PersonsLists: React.FC<PersonsType> = ({ persons }) => {

    console.log(persons);


    const [amount, setAmount] = React.useState(10)

    return persons ? <><ul className={style.list}>
        {persons.slice(0, amount).map((man, i) => <Person key={man.id} {...man} />)}
    </ul>
        {/* не робит кнопка */}
        <span onClick={() => alert('не робит кнопка')} className={style.more}><a href="">посмотреть всех</a></span>
    </>
        : <div>Нету данных</div>
}
