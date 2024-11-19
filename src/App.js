import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login.js'
import Header from './components/Header.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
