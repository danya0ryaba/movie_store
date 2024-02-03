import React from 'react'
import { Header } from '../components/header/Header'
import { FullScreen } from '../components/fullscreen/FullScreen'
import { Category } from '../components/category/Category'

// https://imagetmdb.com/t/p/original/vRTKNKNWLZ22fAgPa5kY8wT2b1F.jpg

export const Home = () => {
    return <div className="home">
        <Header />
        <FullScreen />
        <Category />
    </div>
}
