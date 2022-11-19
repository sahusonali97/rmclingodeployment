import React, { useEffect } from "react";
import Aos from "aos";
import './CardStyle.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

    const Cards = ()=> {
        useEffect(() => {
            Aos.init ({duration:2000});
        },{});
  return (
    <MDBCard className='cards' data-aos="zoom-in-right">
      <MDBCardImage  />
      <MDBCardBody>
        <MDBCardTitle className='text-style'>RMC Lingo’s foreign language training objectives:</MDBCardTitle>
        <MDBCardText className='size-text'>
        1. Students will demonstrate a high level of communicative proficiency in the target language. This proficiency encompasses interpersonal, interpretive, and presentational modes in the modern languages as German, French, Spanish, Russian, Arabic, Japanese, etc.
Interpersonal: Students will interact and negotiate meaning in spoken and written conversations to share information, reactions, feelings, and opinions.
Interpretive: Students will understand, interpret, and analyse what is heard, read, or viewed on a variety of topics
Presentational: Students will present information, concepts, and ideas in both writing and speech to inform, explain, persuade, and narrate on a variety of topics for various audiences and in multiple genres (e.g., narration, argumentation, correspondence, analyses of cultural products, and reports on research).
2. Students will interpret a variety of cultural products in the target language from a critical perspective.
3. Students will use sources of information appropriately in the target language and in many foreign languages as per their need. Appropriately using sources involves students finding, evaluating, engaging with, and correctly citing them, mindful of how these sources support their own academic work.
4. Students will apply wide-ranging knowledge of culture (past and present) while interacting foreign language speaker.
5. Students will engage in cross-cultural dialogue and experiences through participation in curricular, co-curricular, and/or study abroad programs.

        </MDBCardText>
        
       
      </MDBCardBody>
    </MDBCard>
    
  );
}
export default Cards;