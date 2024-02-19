import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import './App.css'; // Importing custom CSS styles

function App() {
  return (
    <div className="App">
      <Router> {/* Router component for handling navigation */}
        <div>
          <Routes> {/* Routes component for defining different routes */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
