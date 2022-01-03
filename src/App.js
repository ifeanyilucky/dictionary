import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components";
import Layout from "./components/Layout";
import Word from "./pages/word";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/word" element={<Word />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
