import React, { useEffect } from "react";
import './OperationStyle.css'
import Aos from "aos";

const Operation = () => {
    useEffect(() => {
        Aos.init ({duration:2000});
    },{});
        
    return (
            
        <div className="image" data-aos="zoom-in-up">
       <p className="input-field" ><p className='text-justify' >RMC Lingo invites to enter into a linguistic ambience that gives you a chance of immersing and experiencing a new culture. The institution offers customized programme to impart the need of students, working professionals and corporate houses. RMC Lingo is tending to be pioneer in the field of foreign language and keen to be a trailblazer for the foreign language learners. We at RMC Lingo are enthusiastic to offer many foreign languages and also provide English proficiency for IELTS and TOEFL tests preparation.

</p>
</p>
            </div>
        

      
    
       
    )
}

export default Operation;
