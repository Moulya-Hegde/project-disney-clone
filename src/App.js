import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Login from './components/Login.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hellooooo</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
