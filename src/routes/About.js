import React from 'react'

import Navbar from '../components/Navbar'
import Newvideo from '../components/Newvideo'
import SecAbout from '../components/SecAbout'
import Footer from '../components/Footer'
import Director from '../components/Director'
import Exnav from '../components/Exnav'









const About = () => {
    return (
        <div>
            <Exnav/>
            <Navbar/>
            <Newvideo/>
            <SecAbout/>
            <Director/>
            <Footer />
        </div>
    )
}

export default About;
