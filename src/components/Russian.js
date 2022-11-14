import React from "react";
import russia from '../assets/bhut.jpeg'
import meeting from '../assets/met.jpeg'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Video from "./Video";

function Russian() {
  return (
    <div>
      <Navbar></Navbar>
      <Video></Video>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={russia} className="img-fluid " alt="" />
          </div>
          <div className="col-md-6">
            <h4>RUSSIAN LANGUAGE PROGRAM</h4>
            <h4 className="subheading">About the Language</h4>
            <h3>привет (privet – hello)!!</h3>
            <p className="text">
            <p className="text-justify">You’ve probably heard about Alexander Pushkin’s revolutionary
              dictionary, which changed the written Russian language. But did
              you know that the language is also heavily influenced by the
              languages of western Europe? Pushkin mastered both literary and
              colloquial styles and put an end to the debate over literary
              style. RMC Lingo offers the best learning solutions in foreign
              language, both offline and online mode.
            </p></p>
            <h4 className="subheading">Ushakov’s dictionary</h4>
            <p>
            <p className="text-justify"> Ushakov’s dictionary for the Russian language is a comprehensive
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
            <h4>Why learns Russian?</h4>

            <p className="text">
            <p className="text-justify">A global career in a global company can be an advantage if you
              speak Russian fluently. IBM, a multinational corporation, is
              looking for talented individuals who speak the Russian language.
              Its mission is to make the world a better place through IT
              solutions. Learning the Russian language is a great way to gain
              this expertise.</p>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={meeting} className="img-fluid h-400 w-400" alt="" />
          </div>
          <div className="col-md-6">
            <h4>CAREER OPTIONS</h4>

            <p className="text">
             <p className="text-justify"> If you are interested in working for an international company,
             <p className="text-justify">there are many opportunities for Russian-speaking translators.
              Russian is an important language that has a large number of
              speakers. The language is also widely used throughout Eurasia.
              Russian-speaking consumers are eager to purchase innovative,
              technology-based products and services. As a result, the demand
              for translation services is growing across Russia.
            </p></p></p>
            <p><p className="text-justify">
              Almost three thousand Russian translators are needed in the United
              States alone, and the demand for them is growing steadily. As a
              result, the translation industry is expected to grow at an average
              rate of 22% per year. It is also estimated that the language
              translation market will grow to $57 billion by 2023.
            </p></p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Russian;
