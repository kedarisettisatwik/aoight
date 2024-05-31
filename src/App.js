import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Website from './Pages/website/Website';

function App(){

  return (
    <Routes>
      <Route path="/" element={<Website />} />
    </Routes>
  );
}

export default App;
