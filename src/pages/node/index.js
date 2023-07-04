import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sideBar'
import Content from './content'
import { sidebarLinks } from './content'


const Docs = () => {
    const [shown, setIsShown] = useState(true)

    return (
        <div>
            <div style={{ position: "fixed", width: "100%", zIndex: 11 }}>
                <Navbar setIsShown={setIsShown} shown={shown} />
            </div>
                <Sidebar shown={shown} setIsShown={setIsShown} sidebarLinks={sidebarLinks} Component={Content} />
            <Footer />
        </div>
    )
}

export default Docs

