import React from 'react'
import style from './isloader.module.scss'

export const Loader: React.FC = () => {
    return <div className={style.spin_wrapper}>
        <div className={style.spinner}>
        </div>
    </div>
}
