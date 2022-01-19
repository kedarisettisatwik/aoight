
import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Intro from './Intro';
import Dash from './Pages/Dashboard';

function App(){
  return (
    <Routes>
       <Route path="/aoight" exact element={<Intro />} />
       <Route path="aoight-start" exact element={<Intro />} />
       <Route path="aoight-dashboard" exact element={<Dash />} />
    </Routes>
  );
}

export default App;
