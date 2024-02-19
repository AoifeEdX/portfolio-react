import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Home from './pages/Home'; // Importing the Home component
import About from './pages/About'; // Importing the About component
import Projects from './pages/Projects'; // Importing the Projects component
import Contact from './pages/Contact'; // Importing the Contact component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './App.css'; // Importing custom CSS styles

function App() {
  return (
    <div className="App">
      <Router> {/* Router component for handling navigation */}
        <div>
          <Routes> {/* Routes component for defining different routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
