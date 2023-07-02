import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Error  from './Pages/error/Error';
import Website from './Pages/website/Website';
import VibeChats from './Pages/vibeTalk/VibeChats';
import DashBoard from './Pages/vibeTalk/DashBoard';

function App(){

  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/vibeChats" element={<VibeChats/>}></Route>
      <Route path="/vibeChats/dashBoard" element={<DashBoard/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
