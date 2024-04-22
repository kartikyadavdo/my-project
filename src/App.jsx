import TopNavbar from "./components/TopNavbar";
import SideBar from "./components/SideBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Kanban from "./pages/Kanban";
import Inbox from "./pages/Inbox";
import Products from "./pages/Products";
import { useState } from "react";
import { Button } from "@tremor/react";

function App() {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <BrowserRouter>
      <div className={theme}>
        <SideBar />
        {/* this is sidebar */}
        <main className="sm:ml-64 bg-slate-300 dark:bg-slate-500  h-screen ">
        <TopNavbar theme={theme} setTheme={setTheme} />
          {/* this is topbar  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="kanban" element={<Kanban />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
