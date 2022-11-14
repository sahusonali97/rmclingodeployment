import React from 'react'
import './AdmissionStyle.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Admission = () => {
    return (
        <div className='footerA'>
            <div className='footer-containerA'>
                <div className='leftA'>
                    <div className='locationA'>
                       
                        <div>
                            
                            <h4>Terms of Admission</h4>
                        </div>
                    </div>
                    <div className='phoneA'>
                        
                    </div>
                    <div className='emailA'>
                       
                    <h4>Few basic terms &amp; conditions guided and accepted at RMC Lingo that binds the student while enrolling in a programme.</h4>
                    </div>
                </div>
                <div className='rightA'>
                    <h4>STUDENTS ENROLLING IN ANY PROGRAMME MUST:</h4>
                    <p></p>
                    <p>Manchester university,        
                    London School of Economics,                  
                    London School of Business,
                    University of East London,  
                    Birmingham university.
                    </p>
                    <h2>Admission Criteria</h2>
                    <p>At RMC Lingo our admission policy aims to admit students regardless of social, racial,
religious, and other considerations.
Application for admission can be made directly at RMC Lingo. Application forms are
available from reception or by contacting the counselling desk.
Admission is strictly on a first come first serve basis for all language programs.</p>
                    
                </div>

            </div>
        </div>
    )
}

export default Admission;
