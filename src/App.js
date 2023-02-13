// import logo from './logo.svg';
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
import ContactUs from './components/ContactUs';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      
      <div id='app-body'>
      {/* <img src="https://www.pixelstalk.net/wp-content/uploads/2016/04/Simple-backgrounds-for-desktop-download.jpg" class="img-fluid" alt="Home_bg_img"></img> */}
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/home' element={<Home />} />
          < Route path='/about' element={<About />} />
          < Route path='/add' element={<Add />} />
          < Route path='/sub' element={<Sub/>} />
          < Route path='/mul' element={<Mul/>} />
          < Route path='/div' element={<Div/>} />
          < Route path='/avg' element={<Avg/>} />
          < Route path='/contact' element={<ContactUs/>} />
          < Route prth='/page404' element={<Page404/>} />
          < Route prth='/*' element={<Page404/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
