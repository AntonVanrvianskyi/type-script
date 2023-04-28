import React from 'react';
import './App.css';
import MainLayout from "./layouts/MainLayout";
import {Route, Routes} from "react-router-dom";
import CarsPage from "./pages/CarsPage";


function App() {
  return (
   <div>
       <Routes>
           <Route path={'/'} element={<MainLayout/>}>
               <Route path={'/cars'} element={<CarsPage/>}/>
           </Route>

       </Routes>
   </div>
  );
}

export default App;
