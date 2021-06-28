import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';


import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return (
    <>  
      <Header/>
      <Home/>
    </>
  );
}

export default App;
