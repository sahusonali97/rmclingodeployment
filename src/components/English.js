import React from "react";
import company from '../assets/beuty.jpeg';

import office from '../assets/eng.jpeg';
import "./EnglishStyle.css";

import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'



function English() {
    return(
    <div>
<Navbar></Navbar>
<Video></Video>
   
        <div class="how-section1">
            <div class="row">
                <div class="col-md-6 how-img">
                    <img src={office} class=" img-fluid" alt=""/>
                </div>
                <div class="col-md-6">
                    <h4>ENGLISH LANGUAGE PROGRAM
</h4>
                                <h4 class="subheading">About the Language:
 
 </h4>
                <p class="text"><p className="text-justify">French – The language of Love!!
Why many great literature classics are in French!! This is one of the major languages that is spoken internationally too. So, if you are interested in building your international career, learning French will be a huge advantage. You will find it useful in any field where you need to communicate in more than one language.
French has several idioms and expressions that will help you communicate with people of all nationalities. RMC Lingo offers the best learning solutions in French language, both offline and online mode. It is also the fourth most spoken language in the after English, Spanish and Chinese.
</p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h4>Why learns English?

</h4>
<p class="text" ><p className="text-justify">Proficiency in English is a critical component of a successful modern society. English is the third most spoken and most widely taught language on the planet. Commonly used in over 100 countries by more than 300 million people as a first language and by over 600 million as a second language, English is a “global language,” the “lingua franca of the modern era.” English skills are necessary for any country to fully benefit from global commerce; access the latest science, technology, and innovation; and exert influence in the world. 
The two main English language proficiency tests accepted at universities across the world are the Test of English as a Foreign Language (TOEFL) and the International English Language Testing System (IELTS). Achieving a particular score on one of these tests could help you study in English at the institution of your choice, so it can be an essential part of the studying abroad process.</p>
 

 </p>
                </div>
                <div class="col-md-3 how-img">
                    <img src={company} class=" img-fluid" alt=""/>
                </div>
            </div>
            <div class="row">
                
                
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>
    
    );
}
export default English;