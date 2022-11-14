import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'
import Video from '../components/Video'

import AccSection from '../components/AccSection'
import Admission from '../components/Admission'




const Pricing = () => {
    return (
        <div>
            <Navbar />
            <Video/>
            <HeroImage heading='Choose your Language' text='.' />
            <PricingCards />
            <AccSection/>
            <Admission/>
            <Footer />
        </div>
    )
}

export default Pricing
