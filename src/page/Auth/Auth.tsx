import React, { useCallback } from 'react'
import { SignUp } from '../../components/authLogin/SignUp'
import { SignIn } from '../../components/authLogin/SignIn'
import { AuthDetails } from '../../components/authLogin/AuthDetails'
import style from './auth.module.scss'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'

const Auth: React.FC = React.memo(() => {

    const navigate = useNavigate()

    const [authState, setAuthState] = React.useState(true)

    const onLoginAcc = useCallback(() => setAuthState((prev) => !prev), [setAuthState])

    const onClickBack = useCallback(() => navigate(-1), [navigate])

    return <><section className={style.auth}>
        <button className={style.back} onClick={onClickBack}> &#129044; Назад</button>
        {authState ? <SignUp /> : <SignIn />}
        <span className={style.auth__span} onClick={onLoginAcc} style={{ color: 'white' }}>
            {authState ? 'Войти в аккаунт' : 'зарегестрироваться'}
        </span>
        <AuthDetails />
    </section>
        <Footer />
    </>
})

export default Auth