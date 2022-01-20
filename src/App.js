
import React from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Intro from './Intro';
import Dash from './Pages/dashboard/Dashboard';
import Error  from './Pages/error/Error';

function App(){

  const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
       <Route path="/" exact element={<Intro />} />
       <Route path="/aoight-start" exact element={<Intro />} />
       <Route path="/aoight-dashboard" exact element={<Dash />} />
       <Route path="*" exact element={<Error />} />
    </Routes>
    </AnimatePresence>
  );
}

export default App;
