import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import React from 'react';
import Home from "./components/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

    <Navbar/>
    </>
  );
}

export default App;
