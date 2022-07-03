
import React from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import Error  from './Pages/error/Error';
import Savesquare from './Pages/game/Savesquare';

function App(){

  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
       {/* <Route path="/" exact element={<Intro />} /> */}
       <Route path="/" exact element={<Savesquare />} />
       <Route path="*" exact element={<Error />} />
    </Routes>
  );
}

export default App;
