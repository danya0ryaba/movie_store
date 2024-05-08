import { onAuthStateChanged, signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import style from './signup.module.scss'
import { useAppDispatch } from '../../store/hooks/redux'
import { removeAuth } from '../../store/auth/authSlice'
import { Button } from '../button/Button'

export const AuthDetails: React.FC = () => {

    const dispatch = useAppDispatch()

    const [authUser, setAuthUser] = React.useState<any>(null)

    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            // console.log();

            if (user) setAuthUser(user)
            else setAuthUser(null)
        })
        return () => listen()
    }, [])

    const userSignOut = () => {
        signOut(auth)
            .then(() => { dispatch(removeAuth()) })
            .catch((error) => alert(error.message))
    }

    return <div className={style.exit}>
        {authUser ?
            <div className={style.exit__login}>
                <p className={style.exit__login_p}>{`Вы вошли в аккаунт ${authUser.email}`}</p>
                <Button onClick={userSignOut}>Выйти</Button>
            </div> : <p className={style.exit__out}>Выйти из аккаунта</p>}
    </div>
}