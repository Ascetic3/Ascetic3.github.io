import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header'
import AppFooter from './components/footer'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/aboutus";

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
