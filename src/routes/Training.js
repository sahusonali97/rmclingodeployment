import React from 'react'

import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'

import TrainPage from '../components/TrainPage'
import Services from '../components/Services'
import Footer from '../components/Footer'
 






const Training = () => {
    return (
        <div>
            
            <Navbar />
            <HeroImage heading='TRAINING' text='Our virtual classes are real-time live streaming with native teachers who have years of experience teaching foreign languages. You will learn and practice foreign language at your convenience without stepping out from your home or office.' />
            <TrainingSection />
            <Training/>
            <TrainPage/>
           <Services/>
            <Footer />
           
        </div>
    )
}

export default Training;
