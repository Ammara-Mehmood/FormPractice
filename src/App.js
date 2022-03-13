
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/About' element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
