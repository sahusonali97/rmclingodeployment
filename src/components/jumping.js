import React, { useEffect } from "react";
import company from '../assets/twint.png';
import Aos from "aos";



import "./JumpingStyle.css";




const Jumping = ()=> {
    useEffect(() => {
        Aos.init ({duration:2000});
    },{});
        
    return(


        <div class="how-section1">
            <div class="row">
           

                <div class="col-md-15">
                    



                </div>
            </div>
            <div className="text-size">
            <p className="para"><marquee className="marquee-text" >Take a jumpstart and become a linguist with RMC Lingo</marquee>
</p>
</div>
            <div class="row">
                <p>
</p>
                <div class="col-md-6">
                    <h4>Our World-class academicians train you discover your genius.
RMC Lingo – The proactive way to become a linguist.The proactive language lab helps to become a linguist.



</h4>

                </div>
                <div class="col-md-6 how-img">
                    <img src={company} class=" img-fluid"  data-aos="flip-down" alt="" />
                </div>
            </div>
            <div class="row">
                
                
            </div>
            
            
        </div>
       
    
    
    );
}
export default Jumping;