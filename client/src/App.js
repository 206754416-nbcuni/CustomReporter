import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import { useState, useEffect } from "react";
import { Register } from "./pages/Register/Register";
import './App.css';
import Production from "./pages/production/Production";
import Release from "./pages/release/Release";
import Development from "./pages/Development/Development";
import Enhancement from "./pages/Enhancement/Enhacement";
import HighLights from "./pages/Highlights/Highlights";
import HeadLights from "./pages/Headlights/Headlights";
import Profile from "./pages/profile/Profile";
import GetJoke from "./pages/GetJoke/GetJoke";


function App() {

  return (
   <div className="App">
    <Router>
      <Routes>
        
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="Production" element={<Production/>}/>
          <Route path="Release" element={<Release/>}/>
          <Route path="Enhancement" element={<Enhancement/>}/>
          <Route path="Highlights" element={<HighLights/>}/>
          <Route path="Profile" element={<Profile/>}/>
          <Route path="Headlights" element={<HeadLights/>}/>
          <Route path="Development" element={<Development/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="GetJoke" element={<GetJoke/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path="userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="product">
            <Route index element={<List/>}/>
            <Route path="productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
        </Route>

      </Routes>
    </Router>

   </div>

  );
}

export default App;
