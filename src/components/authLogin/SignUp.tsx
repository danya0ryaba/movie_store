import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { FormEvent } from 'react'
import { auth } from '../../firebase'
import style from './signup.module.scss'
import { useAppDispatch } from '../../store/hooks/redux'
import { setAuth } from '../../store/auth/authSlice'
import { useAuth } from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'

export const SignUp: React.FC = () => {
    const { isAuth } = useAuth()
    console.log(isAuth);
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [copyPassword, setCopyPassword] = React.useState('')

    const [error, setError] = React.useState('')

    const register = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== copyPassword) {
            setError("Passwords didn't match")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                dispatch(setAuth({
                    email: user.user.email,
                    id: user.user.uid,
                    token: 'допустим есть'
                }))
                setError("")
                setEmail("")
                setPassword("")
                setCopyPassword("")
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            })
            .catch((error) => alert(error.message))




    }

    return <div>
        <form className={style.form} onSubmit={register}>
            <h2 className={style.form__title}>Создать аккаунт</h2>
            <input className={style.form__inp} placeholder='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="email" />
            <input className={style.form__inp} placeholder='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" />
            <input className={style.form__inp} placeholder='copy password' value={copyPassword} onChange={(e) => setCopyPassword(e.currentTarget.value)} type="password" />
            <button type='submit' className={style.form__btn}>создать аккаунт</button>{error ? <p style={{ color: 'red' }}>{error}</p> : false}
        </form>
    </div>
}
