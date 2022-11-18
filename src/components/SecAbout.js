import React from "react";
import company from '../assets/sefie.jpeg';
import cult from '../assets/look.jpeg';
import office from '../assets/meet.jpeg';
import "./SAbout.css";
import Navbar from '../components/Navbar'
import Video from '../components/Newvideo'
import Footer from '../components/Footer'
import Exnav from '../components/Exnav'



function SecAbout() {
    return(
        <div>
            <Exnav></Exnav>
            <Navbar></Navbar>
            <Video></Video>
           
        <div class="how-section1">
            <div class="row">
                <div class="col-md-6 how-img">
                    <img src={office} class="rounded-circle img-fluid mt-4" alt=""/>
                </div>
                <div class="col-md-6">
                    <h4>ABOUT US</h4>
                                <h4 class="subheading"><p className="text-justify">With the introduction of more than 12+ languages like German, French, Spanish, Japanese, Arabic and many more under single roof. We are much and more enthusiast by introducing in English proficiency domain for IELTS & TOEFL pedagogy.</p></h4>
                <p class="text"><p className="text-justify">The advantages of learning foreign languages are mushrooming as the world becomes increasingly globalized and bilingualism is now perhaps the most useful real-world skill to ever exist. Along with economic globalization, social mobility has also raised the demand of learning foreign languages other than English. The ability to communicate in multiple languages is become more and more important in the increasingly integrated global business communication. Due to overwhelming demand in various regional and foreign languages over the past couple of years and addressing this need of hour with a vision to remove communication barriers RMC Group began expanding its linguistic sphere with the name of RMC Lingo – The Proactive Language Lab; A vision to be the remarkable choice for educational sphere in the linguistic world.</p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h4>OUR VISION</h4>
                                
                                <p class="text" ><p className="text-justify">RMC Lingos’ vision is to educate, motivate and inspire students to interact with people from other nations or cultures in a multiplicity of languages. We are very enthusiastic and seeks to develop linguistically proficient and culturally competent individual who think critically and communicate effectively in local, national and global communities.</p></p>
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
                    <h4>OUR STAFFS</h4>
                                <h4 class="subheading"><p className="text-justify">Our learning methodology is well equipped with the digital tool that supports the students as well as the faculty members to make the learning experiencing more enjoyable and entertaining through presentations, extempore and various classroom activities.</p></h4>
                                <p class="text"><p className="text-justify">Faculty members at RMC Lingo’s are Bona fide and experienced having good counselling skills who are eager to educate and help the students to attain specific goals. They bring their experience and mentorship to provide the best language proficiency on the global platform. With the facility of good training environment our teaching staffs put their best effort to fulfil the students doubts, desired syllabus and the course curriculum.
</p></p>
                </div>
            </div>
            
            
        </div>
        <Footer></Footer>
        </div>
        
    );
}
export default SecAbout;