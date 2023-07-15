import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShowBus from "./components/ShowBus";



function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/homepage" element={<HomePage/>}>
        <Route exact path="showbus" element={<ShowBus/>}/>  
      </Route>
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
