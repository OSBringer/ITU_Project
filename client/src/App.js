import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home/Home.jsx'
import Login from './screens/Login/Login.jsx'

import styles from './App.module.scss'

function App() {
  const [logg, setLogg] = useState(true);

  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home logg={logg} setLoggHandler={setLogg} />} />
          <Route path="/login" element={<Login setLoggHandler={setLogg} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
