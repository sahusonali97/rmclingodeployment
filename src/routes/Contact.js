import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Exnav from '../components/Exnav'

const Contact = () => {
    return (
        <div>
            <Exnav/>
            <Navbar />
            <HeroImage heading='CONTACT' text='Contact With Us' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
