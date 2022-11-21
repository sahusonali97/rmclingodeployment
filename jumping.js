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
                <div class="col-md-5">
                    <h4>The RMC Lingo’s aims will:</h4>
                    <h6 className="text-justify" >
Better achieve its mission with respect to global education and foreign language education
Serve as a model to other institutions in the field of foreign language education


</h6>

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