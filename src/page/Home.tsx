import React from 'react'
import { FullScreen } from '../components/fullscreen/FullScreen'
import { Category } from '../components/category/Category'
import { TopFilms } from '../components/topfilms/TopFilms'
import { Popular } from '../components/popular/Popular'

// https://imagetmdb.com/t/p/original/vRTKNKNWLZ22fAgPa5kY8wT2b1F.jpg

const Home: React.FC = () => {
    return <>
        <FullScreen />
        <Category />
        <TopFilms />
        <Popular />
    </>
}

export default Home