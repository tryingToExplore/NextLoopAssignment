import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import 'semantic-ui-css/semantic.min.css'
import { Route , BrowserRouter   as Router, Routes ,Link } from 'react-router-dom';
import React, {Fragment} from 'react';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
     </Routes>
    </Router>
    </div>
  );
}

export default App;
