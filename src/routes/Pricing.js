import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'
import Video from '../components/Video'

import AccSection from '../components/AccSection'




const Pricing = () => {
    return (
        <div>
            <Navbar />
            <Video/>
            <HeroImage heading='Choose your Language' text='.' />
            <PricingCards />
            <AccSection/>
            <Footer />
        </div>
    )
}

export default Pricing
