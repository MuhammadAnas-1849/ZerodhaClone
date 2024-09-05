// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
 

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App