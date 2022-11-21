import React from "react";
import japan from "../assets/red.jpeg";
import meeting from "../assets/white.jpeg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Video from "./Video";
import alley from '../assets/bhut.jpeg';
function Japanies() {
  return (
    <div>
      <Navbar></Navbar>
      <Video></Video>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={japan} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <h4>JAPANESE LANGUAGE PROGRAM</h4>
            <h4 className="subheading">About the Language</h4>
            <h3>こんにちは (Kon’nichiwa – hello !!)</h3>
            <p className="text">
            <p className="text-justify"> Much has been written and said about the land of Ikigai, isn’t it?
              The land of the latest technology, with traditional living at
              heart, and sushi as a part of daily life. The latest revolution in
              technology is named after Japanese Technology. The first mobile
              phone, and the first ever laptop was manufactured by Japan not to
              forget, Nokia and Toshiba, Panasonic to Suzuki samurai, all are
              global leaders in Japanese technology and have carved a niche for
              themselves.
            </p></p>

            <p>
            <p className="text-justify"> Japanese are culturally rich people, who are grounded in their
              roots and still fly high alongside their sky scrapper buildings.
            </p></p>
            
            <p>
            <p className="text-justify"> If you want a global career, you may want to learn the Japanese
              language. Many employers in Japan are searching for bilingual
              professionals. The demand is high in fields such as engineering,
              sales, and human resources. Plus, learning Japanese makes economic
              sense. According to recent studies, bilingual professionals in
              Japan are earning an average of 10 percent more than their
              counterparts who do not. Besides the obvious benefits of a higher
              salary, learning Japanese can also help you improve your
              relationships and expand your professional opportunities.
            </p></p>
          </div>
        </div>
        <div className="row">
            
          <div className="col-md-6">
          
      
          
            <h4>Why learns Japanese?</h4>

            <p className="text">
            <p className="text-justify"> Learning Japanese is a gateway to other Asian languages &
              cultures. By learning Japanese, you will gain access to an insider
              view of the rich culture, its endless historical, philosophical
              and theological resources as well as an incredible library of
              literary and cinematic works.
            </p></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={alley} className=" mr-4 img-fluid h-500 w-500" alt="" />
          </div>
          <div className="col-md-6">
            
            <h4>CAREER OPTIONS</h4>
            <h3>Become a translator or interpreter</h3>

            <p className="text">
            <p className="text-justify">A career as a translator or interpreter requires extensive
              language skills. There are many benefits to this type of job,
              including the ability to choose your own hours and set your own
              schedule. In addition to earning money, a career as a translator
              also allows you to develop business and people skills. Earn money
              by creating content about Japan If you are a traveller and have a
              passion for Japan, you could use your skills to monetize your
              videos and photos. There are many ways to make money on YouTube,
              including placing ads, offering services, and affiliate links. As
              the country grows in popularity as a travel destination, there is
              a growing demand for English-language digital content. To
              capitalize on this opportunity, you could create videos that show
              off the best of Japan, and offer a chance to earn money while
              having fun.
            </p></p>
            <h3>Work in global marketing</h3>
            <p>
            <p className="text-justify">In Japan, bilingual professionals are in high demand in fields
              such as human resources, sales, and engineering. Moreover, it
              makes economic sense to become a bilingual professional. According
              to one estimate, bilingual professionals in Japan can expect a ten
              percent wage increase every year.
            </p></p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Japanies;
