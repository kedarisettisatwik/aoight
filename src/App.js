
import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Intro from './Intro';
import Dash from './Pages/dashboard/Dashboard';
import Error  from './Pages/error/Error';

function App(){
  return (
    <Routes>
       <Route path="/" exact element={<Intro />} />
       <Route path="/aoight-start" exact element={<Intro />} />
       <Route path="/aoight-dashboard" exact element={<Dash />} />
       <Route path="*" exact element={<Error />} />
    </Routes>
  );
}

export default App;
