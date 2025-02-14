import React from "react";
import {Router, Route, Routes, BrowserRouter } from "react-router-dom";
import One from './Components/Pages/One'
import Two from './Components/Pages/Two'
import Three from './Components/Pages/Three'
import Nopage from './Components/Pages/Nopage'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<One/>}/>
            <Route path="/One" element={<One/>} />
            <Route path="/Two" element={<Two/>} />
            <Route path="/Three" element={<Three/>} />
            <Route path="*" element={<Nopage/>} />



          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
