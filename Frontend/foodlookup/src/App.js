import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './layouts/Home/Home';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import API from './layouts/API/API';
import About from './layouts/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<API />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <div className='empty'></div>
      <Footer />
    </div>
  );
}

export default App;
