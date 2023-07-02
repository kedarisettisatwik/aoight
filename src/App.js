import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Error  from './Pages/error/Error';
import VibeChats from './Pages/vibeTalk/VibeChats';
import Website from './Pages/website/Website';

function App(){

  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/vibeChats" element={<VibeChats/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
