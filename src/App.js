import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './widgets.js';


function App() {
  return (
    //BEM
    <div className="app">
      <Sidebar/>

      <Feed/>

      <Widgets/>

    </div>
  );
}

export default App;
