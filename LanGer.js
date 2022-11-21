import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './LanGerStyle.css'

function LanGer() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How is the IELTS Test Developed?

</Alert.Heading>
        <p>
        The IELTS test is developed to provide assessment on the English language proficiency in a fair, accurate and reliable manner. It has rigorous test design, development and validation processes. These processes verify that every version of the test is of a comparable level of difficulty, and that every test around the world provides valid and consistent results.
Test writers from different English-speaking countries develop IELTS content so it reflects real-life situations around the world and is unbiased and fair to all test takers, whatever their background.

<h4><b>What is the IELTS™ Test?
</b></h4>

The International English Language Testing System (IELTS) is designed to assess the language ability of candidates who need to study or work where English is the language of communication and instruction.
It is a compulsory exam for admission into universities and training programs in the UK, Australia, New Zealand and Canada. Professional bodies, government agencies and immigration authorities also of these countries recognize the test.
IELTS is managed by three reputable, international organizations – British Council, IDP: IELTS Australia and the University of Cambridge ESOL Examinations (Cambridge ESOL).
It covers four basic language skills – listening, reading, writing and speaking.
Administered at centres throughout the world
Top Countries Accepting IELTS Score
United Kingdom (UK)
United States of America (USA)
Australia
Canada
Germany

 Top Universities/colleges for IELTS
University of Toronto
McGill University
The University of British Columbia
University of Birmingham
The University of Manchester
The University of Chicago
The University of Warwick
North-western University
Formats of the IELTS Test
There are two formats of the test – Academic and General Training.
Academic – Institutions of Higher and Further Education
The Academic format is, broadly speaking, for those who want to study or train in an English-speaking university or Institutions of Higher and Further Education. Admission to undergraduate and postgraduate courses is based on the results of the Academic test.
General Training – for school, work or migration
The General Training format focuses on basic survival skills in broad social and workplace contexts. It is typically for those who are going to English-speaking countries to do secondary education, work experience or training programs
It should be noted that certain professions require an Academic test result for registration and migration purposes.
The Listening and Speaking modules remain the same in both the formats but have different Reading and Writing modules.
Academic Training	General Training
Listening: 4 Sections, 40 questions and 30 minutes	Listening: 4 Sections, 40 questions and 30 minutes
Reading: 3 sections, 40 questions and 60 minutes	Reading: 3 sections, 40 questions, 60 minutes
Writing: 2 tasks, 60 minutes	Writing: 2 tasks, 60 minutes
Speaking: 11-14 minutes	Speaking: 11-14 minutes

The Listening Test Format for IELTS Exam
Multiple choice
Sentence completion
Matching
plan/map/diagram labelling
Form /note/ table/ flow chart/ summary completion
 
The Reading Test Format for IELTS Exam
Multiple choice
Sentence completion
Matching
diagram label completion
Short-answer question
The Writing Test Format for IELTS Exam
In Academic training writing- Candidates are required to show that they can provide a written description of some visual information (of minimum 150 words in 20 minutes) that can develop their ideas in an essay about a specified topic (of minimum 250 words in 40 minutes).
In General training writing- The first writing task given is a familiar task, i.e., letter writing, in respect to a scenario. Candidates will be given 20 minutes to write about 150 words. The second task is an essay and it should not be of minimum 250 words and should be done in 40 minutes.
 
The Speaking Test Format for IELTS Exam
It is divided into 3 parts of 11-15minutes.
Part 1: This includes all the verbally asked questions that invite candidates to share a little bit about their life.
Part 2: The part known as “the long turn.” The topic is given to candidates in a written form. They will be allowed to make and use notes so that their thoughts are organized before they speak.
IELTS TEST EXAMS SCHEDULE:
IELTS test is conducted up to 4 times in a month making a total of 48 fixed test dates in one calendar year. The availability of IELTS dates in India may vary for the Academic and General Training modules.
IELTS Scoring:
There is no pass or fail in IELTS. You will be graded on your performance using scores from 1 to 9 for each part of the test – Listening, Reading, Writing and Speaking. Your results from the four parts then produce an Overall Band Score.
This unique 9-band system measures scores in a consistent manner – wherever and whenever the test is taken. It is internationally recognized and understood, giving you a reliable international currency.
The IELTS 9-band scale
Each band corresponds to a level of English competence. All parts of the test and the Overall Band Score can be reported in whole and half bands, e.g. 6.5, 7.0, 7.5, 8.0.
The IELTS Cut Off generally ranges from 7 to 8 from 9-band Scale.


 

        </p>
        <hr />
        <div className="d-flex justify-content-end" >
          <Button onClick={() => setShow(false)} variant="outline-success">
            CLICK HERE
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>QUESTION</Button>}
    </>
  );
}


export default LanGer;