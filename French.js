import React from "react";
import company from '../assets/sefie.jpeg';
import cult from '../assets/look.jpeg';
import office from '../assets/meet.jpeg';
import "./FrenchStyle.css";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Exnav from '../components/Exnav'



function French() {
    return(
    <div>
        <Exnav></Exnav>
<Navbar></Navbar>
<Video></Video>
   
        <div class="how-section1">
            <div class="row">
                <div class="col-md-6 how-img">
                    <img src={office} class="rounded-circle img-fluid" alt=""/>
                </div>
                <div class="col-md-6">
                    <h4>FRENCH LANGUAGE PROGRAM
</h4>
                                <h4 class="subheading">About the Language:
 
 </h4>
                <p class="text">French – The language of Love!!
<p className="text-justify"><p className="text-justify">Why many great literature classics are in French!! This is one of the major languages that is spoken internationally too. So, if you are interested in building your international career, learning French will be a huge advantage. You will find it useful in any field where you need to communicate in more than one language.
French has several idioms and expressions that will help you communicate with people of all nationalities. RMC Lingo offers the best learning solutions in French language, both offline and online mode. It is also the fourth most spoken language in the after English, Spanish and Chinese.
</p></p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h4>Why learns French?

</h4>
<p class="text" ><p className="text-justify">Knowing French will allow you not only to function but to compete effectively in the global economy of the future. French is ranked the 2nd most prominent language in the world. It is the lingua france of culture, including art, cuisine, dance, and fashion. Learning French will increase your job opportunities and salary potentials. And also increases your appreciation from other people, and from other countries, the traditions, the history, the culture, and you can meet new people and understand them without any problem. Learning French will also enhance your grammar skills, and will greatly improve your scores on the verbal section. RMC Lingo always tries to associate the students with the applicable skills which improves and helps the students in any field they want to pursue.

 </p></p>
                </div>
                <div class="col-md-6 how-img">
                    <img src={company} class="rounded-circle img-fluid" alt=""/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 how-img">
                    <img src={cult} class="rounded-circle img-fluid" alt=""/>
                </div>
                <div class="col-md-6">
                    <h4>Career Options
</h4>
                                <h4 class="subheading"></h4>
                                <p class="text"><p className="text-justify">French is one of the world’s most important languages, and knowing it can open several career opportunities. For example, French theatre and cinema are famous worldwide and frequently nominated for the most prestigious awards. It’s also a requirement for actors and actresses to know French, as many French film directors want people who can deliver their lines convincingly.
Globalization and digitalization have opened many job opportunities nationally and internationally. There are multiple job opportunities available in the French language, that require advanced language skills, such as language assessors and translators. Enter the global business scenario and manage your international meetings on your own with your French language skills. 
 

</p></p>
                </div>
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>
    
    );
}
export default French;