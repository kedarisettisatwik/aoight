
import React from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import Error  from './Pages/error/Error';
import Website from './Pages/website/Website';
import Stock from './Pages/stock/Stock';

function App(){

  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Website />} />
      <Route path="/stock" exact element={<Stock />} />
      <Route path="*" exact element={<Error />} />
    </Routes>
  );
}

export default App;
