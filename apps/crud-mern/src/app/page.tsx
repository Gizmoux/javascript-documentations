'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Signup';
function App() {
  // Authentification dans App.tsx
  const [token, setToken] = useState(Cookies.get('userToken') || null);
  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      // Créer un cookie
      Cookies.set('userToken', tokenToSet);
      setToken(tokenToSet);
    } else {
      // Supprimer le cookie
      Cookies.remove('userToken');
      //Repasser le state token à null
      setToken(null);
    }
  };
  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
