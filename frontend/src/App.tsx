import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="widthLimit">
        {/* This is the location where all of the extra components are thrown in */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
