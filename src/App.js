import "./App.css";
import { Routes, Route } from "react-router-dom";

import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import PageNotFound from "./components/PageNotFound";
import Social from "./components/Social";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="social">
        <Social />
      </div>
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
