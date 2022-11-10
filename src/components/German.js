import React from "react";
import company from '../assets/Germanypic.jpeg';
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
                    <h4>Why learns German?
</h4>
<p class="text" >For those who want to pursue their career in German language, we provide an effective and supportive learning environment. RMC Lingo always tries to associate the students with the applicable skills which improves and helps the students in any field they want to pursue.
 
 </p>
                </div>
                <div class="col-md-6 how-img">
                    <img src={company} class="img-fluid" alt=""/>
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
                                <p class="text">Multilingualism is important for aviation professionals as it helps them connect with passengers and improve customer service. In addition, speaking multiple languages improves one’s intercultural skills, which are essential for safety and service excellence.
Learners who speak German can enjoy a variety of career opportunities. German proficiency can embark a learner’s career to new heights. The country has a strong tourism industry, and there are a variety of job roles available. The industry is always on the lookout for bright 
minds. Furthermore, Germans have high per capita income and very low unemployment rates, which makes them a desirable workforce for businesses.

</p>
                </div>
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>
    
    );
}
export default German;