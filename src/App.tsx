import React from 'react';
import './App.css';


import {Route, Routes} from "react-router-dom";
import FormLoginPage from "./pages/FormLoginPage";
import MainLayout from "./components/layouts/MainLayout";


function App() {


  return (
      <div>

            <div>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}/>
                    <Route path={'form'} element={<FormLoginPage/>}/>
                </Routes>
            </div>
          </div>

  );
}

export default App;
