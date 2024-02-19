import React from 'react'
import { FullScreen } from '../components/fullscreen/FullScreen'
import { Category } from '../components/category/Category'
import { TopFilms } from '../components/topfilms/TopFilms'
import { Company } from '../components/company/Company'
import { Popular } from '../components/popular/Popular'
import { Footer } from '../components/footer/Footer'

// https://imagetmdb.com/t/p/original/vRTKNKNWLZ22fAgPa5kY8wT2b1F.jpg

export const Home = () => {
    return <>
        <FullScreen />
        <Category />
        <TopFilms />
        <Company />
        <Popular />
        <Footer />
    </>
}
