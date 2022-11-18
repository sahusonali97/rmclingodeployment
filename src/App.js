import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';

import About from './routes/About'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import German from './components/German'
import French from './components/French';
import English from './components/English';
import Spanish from './components/Spanish';
import Japanies from './components/Japanies';
import Arabic from './components/Arabic';
import Russian from './components/Russian';
import SecAbout from './components/SecAbout';
import Director from './components/Director';








function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/About' element={<About/>} />
        <Route path='/German' element={<German/>} />
        <Route path='/French' element={<French/>} />
        <Route path='/English' element={<English/>} />
        <Route path='/Spanish' element={<Spanish/>} />
        <Route path='/Japanies' element={<Japanies/>} />
        <Route path='/Arabic' element={<Arabic/>} />
        <Route path='/Russian' element={<Russian/>} />
        <Route path='/SecAbout' element={<SecAbout/>} />
        <Route path='/Director' element={<Director/>} />
        

        

       
       

      </Routes>
    </>
  );
}

export default App;
