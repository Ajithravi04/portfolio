
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './header';
import"./header.css";
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Blogs from './blogs';
import Contact from './contact';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/About" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter> 
  
    </div>
  );
}

export default App;
