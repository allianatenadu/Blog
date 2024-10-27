import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Person1 from "./pages/Person1";
import Person4 from "./pages/Person4";
import Person2 from "./pages/Person2";
import Person3 from "./pages/Person3";
import Person5 from "./pages/Person5";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person1" element={<Person1 />} />
        <Route path="/person4" element={<Person4 />} />
        <Route path="/person2" element={<Person2 />} />
        <Route path="/person3" element={<Person3 />} />
        <Route path="/person5" element={<Person5 />} />
        {/* You can add more routes for other pages here */}
      </Routes>
    </Router>
  );
}

export default App;
