import {React} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Navbar/>
      <main className="main-container">
        <Routes>
          <Route exact path='/' element={<Hero/>} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;