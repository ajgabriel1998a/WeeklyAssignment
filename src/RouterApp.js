import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";

import Contactus from "./Component/Contactus";
import Dashboard from "./Component/Dashboard";
import Signup from "./Component/Signup";
import Number2 from "./Component/Number2";
import Number3 from "./Component/Number3";
import Number4 from "./Component/Number4";

const RouterApp = () =>{
 return(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/number2" element={<Number2/>}/>
            <Route path="/number3" element={<Number3/>}/>
            <Route path="/number4" element={<Number4/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
 )
}

export default RouterApp;