import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Content from './content/content'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default Home