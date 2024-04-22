import React, { useState } from "react";
import "./App.css";
import { BarChart, Card } from "@tremor/react";
import { AreaChart } from "@tremor/react";

import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <TopNavbar />
      {/* this is sidebar */}
      <main className="sm:ml-64 bg-slate-400 h-screen">
        <SideNavbar />
        {/* this is topbar  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
