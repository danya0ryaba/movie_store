import React from 'react'
import s from './person.module.scss'
import { PersonI } from '../../type/person'
import { usersAPI } from '../../API/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import { ImagesType } from '../../type/images'


export const Person = () => {

    const navigate = useNavigate()

    const onClickBack = () => navigate(-1)

    const [person, setPerson] = React.useState<PersonI>({})
    const [images, setImages] = React.useState<ImagesType>([])
    console.log(images);

    const { id } = useParams()

    React.useEffect(() => {
        usersAPI.getPersonId(Number(id)).then(res => setPerson(res.data))
        usersAPI.getImageId(1, 10, Number(id)).then(res => setImages(res.data.docs))
    }, [id])

    return Object.keys(person).length === 0 ? <Loader /> : <div className={s.container}>
        <button className={s.back} onClick={onClickBack}> &#129044; Назад</button>
        <section className={s.person}>

            <div className={s.person__img}>
                <img src={`${person.photo}`} alt="портрет" />
            </div>

            <div className={s.person__info}>

                <h2 className={s.name}>{person.name}</h2>
                <h2 className={s.en_name}>{person.enName}</h2>

                <div className={s.about__person}>
                    <h3 className={s.about}>О персоне</h3>
                    <div className={s.about_info}>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Карьера:</span>
                            <span className={s.value}>{person.profession?.map((item, i, arr) => {
                                if (arr.length - 1 === i) return <>{item.value}</>
                                else return <>{item.value}, </>
                            })}</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Страна:</span>
                            <span className={s.value}>{person.birthPlace?.map((item, i, arr) => {
                                if (arr.length - 1 === i) return <>{item.value}</>
                                else return <>{item.value}, </>
                            })}</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Возраст:</span>
                            <span className={s.value}>{person.age} лет</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Рост:</span>
                            <span className={s.value}>{person.growth}</span>
                        </span>

                        <span className={s.about__info_block}>
                            <span className={s.key}>Пол:</span>
                            <span className={s.value}>{person.sex}</span>
                        </span>

                    </div>
                </div>

            </div>

        </section>

        <div className={s.facts}>
            <h4>Интересные факты:</h4>
            <ul className={s.facts__ul}>
                {person.facts?.length === 0 ?
                    <>Отсутсвуют</> :
                    person.facts?.map((item, i) => <li key={i} className={s.facts__ul_li}>{item.value}</li>)
                }
            </ul>
        </div>

    </div>
}
