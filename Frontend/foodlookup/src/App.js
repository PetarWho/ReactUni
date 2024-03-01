import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './layouts/Home/Home';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import API from './layouts/API/API';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
