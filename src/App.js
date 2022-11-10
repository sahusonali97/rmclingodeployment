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
       

      </Routes>
    </>
  );
}

export default App;
