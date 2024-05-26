import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { MouseEvent } from 'react'
import { auth } from '../../firebase'
import style from './signup.module.scss'
import { useAuth } from '../../hook/useAuth'
import { useAppDispatch } from '../../store/hooks/redux'
import { setAuth } from '../../store/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../loader/Loader'
import { Button } from '../button/Button'

export const SignIn: React.FC = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const { isAuth } = useAuth()

    const logIn = (e?: MouseEvent<HTMLButtonElement>) => {
        e && e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                dispatch(setAuth({
                    email: user.user.email,
                    id: user.user.uid,
                    token: 'допустим есть'
                }))
                setError("")
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            })
            .catch((error) => setError(`account didn't search. ${error.message}`))
    }

    return <div>
        {!isAuth ?
            <form className={style.form}>
                <h2 className={style.form__title}>Войти</h2>
                <input className={style.form__inp} placeholder='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="email" />
                <input className={style.form__inp} placeholder='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" />
                <Button onClick={logIn}>Войти</Button>
                {error ? <p style={{ color: 'red' }}>{error}</p> : false}
            </form>
            :
            <Loader />}
    </div>
}
