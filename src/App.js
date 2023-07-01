import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Error  from './Pages/error/Error';
import VibeChats from './Pages/vibeTalk/VibeChats';
import SignVibeTalk from './Pages/vibeTalk/SignVibeChats';
import Website from './Pages/website/Website';

function App(){

  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/vibeTalk" element={<VibeChats/>}></Route>
      <Route path="/signup" element={<SignVibeTalk/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
