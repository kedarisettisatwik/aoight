
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Error  from './Pages/error/Error';
import Intro from './Pages/moment/Moment';
import Website from './Pages/website/Website';

function App(){

  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/moment" element={<Intro />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
