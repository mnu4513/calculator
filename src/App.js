import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About'
import Add from './components/Add';
import Sub from './components/Sub';
import Mul from './components/Mul';
import Div from './components/Div';
import Avg from './components/Avg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/home' element={<Home />} />
          < Route path='/about' element={<About />} />
          < Route path='/add' element={<Add />} />
          < Route path='/sub' element={<Sub/>} />
          < Route path='/mul' element={<Mul/>} />
          < Route path='/div' element={<Div/>} />
          < Route path='/avg' element={<Avg/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
