import React, { ReactNode } from 'react'
import style from './title.module.scss'
import { motion } from 'framer-motion'

interface TitleInterface {
    readonly children: ReactNode
}

export const Title: React.FC<TitleInterface> = ({ children }) => {
    return <motion.h2 className={style.title}
        initial={{
            y: 200,
            opacity: 0
        }}
        animate={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            type: "tween",
            duration: 0.55
        }}>{children}</motion.h2>
}