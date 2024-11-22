import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login.js'
import Header from './components/Header.js'
import './App.css';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
