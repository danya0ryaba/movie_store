import React from 'react'
import { SignUp } from '../../components/authLogin/SignUp'
import { SignIn } from '../../components/authLogin/SignIn'
import { AuthDetails } from '../../components/authLogin/AuthDetails'
import { useAuth } from '../../hook/useAuth'

export const Auth: React.FC = () => {

    const [authState, setAuthState] = React.useState(true)

    const onLoginAcc = () => setAuthState((prev) => !prev)

    return <section>
        {authState ? <SignUp /> : <SignIn />}
        <span onClick={onLoginAcc} style={{ color: 'white' }}>
            {authState ? 'Войти в аккаунт' : 'зарегестрироваться'}
        </span>
        <AuthDetails />
    </section>
}