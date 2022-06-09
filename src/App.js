import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/Home/About';
import Home from './Component/Home/Home';
import Navbar from './Component/Shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
