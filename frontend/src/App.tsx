import React from 'react';
import './App.css';
import Header from './Components/Header';
import DataTable from './Components/Movies';
function App() {
  return (
    <div className="App">
      <Header />
      <DataTable />
    </div>
  );
}

export default App;