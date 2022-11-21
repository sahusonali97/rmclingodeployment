import React from "react";
import arabman from "../assets/god.jpeg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Video from "./Video";
import market from "../assets/people.jpeg";
import dubai from "../assets/bhut.jpeg";

function Arabic() {
  return (
    <div>
      <Navbar></Navbar>
      <Video></Video>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={arabman} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <h4>ARABIC LANGUAGE PROGRAM</h4>
            <h4 className="subheading">About the Language</h4>
            <h3>مرحبًا (Marhaba- hello)</h3>
            <p className="text">
            <p className="text-justify"> Arab is a state of rich and varied cultural heritage. Right from
              lovely handicrafts, to lip-smacking aromatic food, and plenty of
              great literary work, Arab has in much more store for you other
              than just oil wells. If you have the Arabic language, then you
              have a lot of job options waiting for you. There are a lot of
              industries that require Arabic speakers, and you can even work as
              an interpreter. These days, interpreters are in high demand. In
              this article, we will discuss some of the job options available
              for Arabic speakers. RMC Lingo offers the best learning solutions
              in foreign language, both offline and online mode.
            </p></p>
            <h4 className="subheading">Ushakov’s dictionary</h4>
            <p>
            <p className="text-justify">Ushakov’s dictionary for the Russian language is a comprehensive
              reference tool. Its entries include a definition and the etymology
              of each word, as well as forms in other languages. In addition,
              each entry has references to its sources. It is also organized
              alphabetically by etymological groups. The Ushakov’s dictionary
              contains more than 700 entries and scholarly information on
              various aspects of Russian language etymology. The entries range
              in length from a single paragraph to several pages. They are
              designed to be easy to read and easy to understand.
            </p></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-center">Why Learn Arabic?</h4>

            <p className="text-center">
            <p className="text-justify"> Learning Arabic offers great business and career opportunities.
              Since the Middle East is witnessing an increasing growth in
              international affairs, there is a huge shortage of workers who are
              versed in Arabic language and culture. Those who study Arabic can
              find careers in diverse fields such as journalism, business &
              industry, education, finance, banking, translation &
              interpretation, consulting, foreign service and intelligence etc.
            </p></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={dubai} className="img-fluid h-400 w-400 mt-4" alt="" />
          </div>
          <div className="col-md-6">
            <h4>CAREER OPTIONS</h4>
            <h3 className="subheading"> Careers in the Middle East</h3>
            <p className="text">
            <p className="text-justify">The Middle East is an important part of the global economy, and a
              good understanding of the Arabic language can be advantageous for
              careers in this region. Those seeking employment in the region can
              find employment in a variety of fields, including translation and
              information gathering for a foreign embassy. They can also find
              employment in non-governmental organizations, banking and
              consulting, and medical services. In addition to these positions,
              Arabic speakers can pursue a variety of business careers.
            </p></p>
            <h3 className="subheading">Trading industry </h3>
            <p>
            <p className="text-justify">Speaking Arabic is an excellent way to gain valuable work
              experience and enhance your professional status. The Arab world is
              an area with many natural resources and having knowledge of this
              language will give you an edge in the job market. Aside from this,
              it is also beneficial to understand the language’s culture,
              history, and traditions. Moreover, there are many job
              opportunities available in this region, as the number of
              Arabic-speaking people is constantly increasing.
            </p></p>
            <h3 className="subheading">Travelling Abroad</h3>
            <p className="text">
            <p className="text-justify"> If you are looking to travel abroad for global job opportunities,
              you may be interested in learning the Arabic language. The
              Department of State and the Department of Defence both offer
              programs to help you learn the language. The programs also offer
              scholarships to help you pay for your study abroad experience.
            </p></p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Arabic;
