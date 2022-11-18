import React from "react";
import company from '../assets/af.png';

import office from '../assets/md.jpg';
import "./DirectorStyle.css";

import Navbar from '../components/Navbar'
import Video from '../components/Newvideo'
import Footer from '../components/Footer'



function English() {
    return (
        <div>
            <Navbar></Navbar>
            <Video></Video>

            <div class="how-section1">
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img src={office} class=" img-fluid" alt="" />
                        <figcaption className="text-justify" >
                            <p><b>Mohammad Imteyaz (Noorani)</b></p>
                            <p>Managing Director</p>
                            <p>RMC Lingo</p>
                            <p>(Under RMC Group of Companies)</p>
                        </figcaption>
                    </div>
                    <div class="col-md-6">
                        <h4>Managing Director’s Message

                        </h4>
                        <h4 class="subheading">From the MD’s Desk


                        </h4>
                        <p class="text"><p className="text-justify">The advantages of learning foreign languages in today’s inter-reliant world are mushrooming. If you want to be a rare breed in this increasingly globalized world, do not expect the world to accommodate you with the proficiency of a single language. Blossoming into an impressive polyglot, you aspire to be 100% feasible with the right approach and mindset that give you the opportunity to engage with the world in a more creative and professional way, while better preparing you to compete and succeed in the global market.
                            RMC Lingo – The proactive Language Lab is the easiest and the most effective methods in enhancing the language learning experience of every learner. Making mistakes is a natural part of the language learning process. The key is to learn from these mistakes. Don’t be afraid to try out new things but always remember to reflect on them and decide what was successful and what you need to keep working on. We nurture an atmosphere in which students are not afraid to take risks, where they can ‘fail well’ and learn from their errors, building resilience within a caring environment.
                            In order to be a literate of the 21st century one should be capable enough to learn, unlearn and relearn. Education should focus on developing life skills such as – creativity, critical thinking, communication and collaboration.
                            Our State-of-the-art RMC Lingo – The proactive language lab and advanced resources enlighten the aspirants and the required band scores can be secured by the meticulous observation of candidate’s everyday progress and categorical steer of our dedicated members of the training team towards the success of the individual.
                            We are confident we would equip our students with clarity for making intelligent choices in career. While we make effective use of technological amenities for learning, we also remain committed to maintain an environment which encourages learning through direct experience and interaction. As we remain pledged to the noble profession of educating all and be in humble regard for the experienced who guide us, we grow while being in gratitude for those who have wished us well. We trust that our present endeavour of giving you RMC Lingo – The Proactive Language Lab, will answer your need for a balanced urban modern languages learning.















                        </p></p>

                    </div>



                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h4>Executive Director’s Message


                        </h4>
                        <p class="text" ><p className="text-justify">We see an immense social responsibility in shaping the society through the learning of foreign languages and so we seek to lay a foundation for a quality training centre for foreign languages, comprising of values besides academic excellence. Learning a language is to have one more window from which to look at the world. In this venture of ours, we bring you a striking balance of contemporary practices within the respected conventions of language training.
                            As you know, English is acknowledged as the widespread and common communication language in our globalizing world. In addition, English is accepted as a common and international scientific language. The goal of RMC Lingo -The proactive language lab is to help students, despite their level, realize their foreign language learning potentials and contribute to their success.
                            The objective of RMC Lingo is to equip students with languages skills sufficient to help them follow classes in their faculties.
                            Based on the 'one language, one person' motto, Our Foreign Languages Division aims to teach out students a second foreign language (German, French, Russian, Greek, and Spanish) other than English that will help them succeed in the world. Organized foreign language courses will help our students from other countries to enhances one’s opportunities in government, business, medicine, law, technology, military, industry, marketing, etc; and also offer academic English proficiency as IELTS and TOEFL for our students who wish to footpace their career goal in the tribune of linguistic sphere.
                            In today's world, the most important objective of education is to raise multi-cultural global citizens and individuals who respect and understand all cultures due to this multi-cultural nature, help individuals to receive education and mainstream in the same classroom with students from other nationalities in the globalizing world. Also, it is aimed to equip students with the language skills required in higher education standards.
                        </p></p>
                    </div>
                    <div class="col-md-6 how-img">
                        <img src={company} class=" img-fluid" alt="" />
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