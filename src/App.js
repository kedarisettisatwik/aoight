import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Error  from './Pages/error/Error';
import VibeTalk from './Pages/vibeTalk/VibeTalk';
import SignVibeTalk from './Pages/vibeTalk/SignVibeTalk';
import Website from './Pages/website/Website';

function App(){

  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/vibeTalk" element={<VibeTalk/>}></Route>
      <Route path="/signup" element={<SignVibeTalk/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
