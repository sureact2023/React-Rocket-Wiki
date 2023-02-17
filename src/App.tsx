import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Rocket from "./pages/Rocket";
import Ships from "./pages/Ships";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path ="/ships" element ={<Ships />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
      </ResponsiveDrawer>
    </BrowserRouter>
  );
}

export default App;
