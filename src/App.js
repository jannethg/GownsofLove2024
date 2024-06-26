import React from 'react';
import './App.css';
import GownsList from './features/gowns/GownsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <GownsList/>
    <Footer/>
    </div>
  );
}

export default App;
