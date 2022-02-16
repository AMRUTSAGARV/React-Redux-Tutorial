// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <Router>
<nav>
<Link to="/">
Home
</Link>
<Link to="/about">
About
</Link>
<Link to="/profile">
Profile
</Link>

</nav>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="*" element={<Error/>}/>
</Routes>
    </Router>
   
  );
}

export default App;
