import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../context/Theme/Theme'

const ViewAboutUs = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={` ${theme === "dark" && "container-view"
            }`}>  
            <NavBar />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default ViewAboutUs