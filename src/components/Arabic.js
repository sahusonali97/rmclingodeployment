import React from "react";
import company from '../assets/sefie.jpeg';
import cult from '../assets/look.jpeg';
import office from '../assets/meet.jpeg';
import "./GermanStyle.css";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'



function German() {
    return(
    <div>
<Navbar></Navbar>
<Video></Video>
   
        <div class="how-section1">
            <div class="row">
                <div class="col-md-6 how-img">
                    <img src={office} class="rounded-circle img-fluid" alt=""/>
                </div>
                <div class="col-md-6">
                    <h4>GERMAN LANGUAGE PROGRAM
</h4>
                                <h4 class="subheading">About the Language:
 
 </h4>
                <p class="text"> If you have ever wondered about German language etymology, you are not alone. German is one of the most important languages in the world, and many people learn it for their careers. The language has a number of distinct types, including Low German, Germanic dialects, inflected, and pluricentric. Its differences from English and other languages make it important for any language lover to learn and understand.
RMC Lingo offers the best learning solutions in German language, both offline and online mode. German language belongs to the group of West Germanic Languages which is one of the most widely used spoken languages in central Europe. It is a co-official language of many European nations such as Austria, Switzerland, Liechtenstein, Luxemburg, Hungary, Poland, Denmark and many more.</p>

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h4>Why learns ?

</h4>
<p class="text" >Realizing that Spanish is spoken in more than 21 countries, learning Spanish is a good choice and can open doors to numerous career opportunities. The largest Spanish investors in India are Cobra (engineering), the Duro Felguera Group (turnkey operations), Coinma (office furniture) and Agroalimen. Other Spanish companies that have a presence in India include Acciona (construction), Albertis (infrastructure), Aldeasa (duty free airport shops), Banco Sadabell, BBVA (bank), Cintra (toll road operator), Mondragón (a corporate cooperative in the Basque Country), Corte Ingles (retailing), Garrigues (law firm), Pascual Group (food), Keraben (ceramics), Mango (textiles), Mapfre Group (insurance), Taurus (home appliances) and Union Fenosa (electric power). 

 </p>
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
                    <h4>Career opportunities for Spanish speakers

</h4>
                                <h4 class="subheading"></h4>
                                <p class="text">Learning the Spanish language offers you numerous opportunities. You can work in many fields, including health care, tourism, and government. Spanish-speaking professionals are more sought-after by employers than non-speakers. You may even be able to land a job in an exotic location.
Spanish is widely spoken in the Americas, the Caribbean, and parts of Europe. It is the first language of 400 to 450 million people. The language is now the second most popular language in the world, only behind Mandarin. In the past few years, the number of people who are learning Spanish has increased by 800 percent. It is now the third most searched language on the Internet.

</p>
                </div>
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>
    
    );
}
export default German;