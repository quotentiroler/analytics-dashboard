import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./Upload";
import Search from "./Search";
import Analytics from "./Analytics";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/search" element={<Search />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;