import './App.css';
import {React, useState} from 'react';
import Header from './Header';
import Left_sidebar from './Left_sidebar';


function App() {

 
  return (
    
    <div className="app">
      <Header />
      
      <Left_sidebar/>
    </div>
    
  );
}

export default App;
