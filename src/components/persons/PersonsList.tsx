import React from 'react'
import style from './persons.module.scss'
import { Persons } from '../../type/movieId'

type PersonsType = {
    persons: Persons[],
}

export const PersonsLists: React.FC<PersonsType> = ({ persons }) => {

    const [amount, setAmount] = React.useState(10)

    return persons ? <><ul className={style.list}>
        {persons.slice(0, amount).map((man, i) => {
            return (<li key={i} className={style.list__actor}>
                <a href="">{man.name}</a>
                <div className="popup" style={{ display: 'none' }}></div>
            </li>)
        })}
    </ul>
        {/* не робит кнопка */}
        <span onClick={() => alert('не робит кнопка')} className={style.more}><a href="">посмотреть всех</a></span>
    </>
        :
        <div>Нету данных</div>
}
