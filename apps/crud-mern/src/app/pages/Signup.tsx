'use client';
import { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    // empecher le raffraichissement:
    event.preventDefault();
    // Requête axios vers l'API "/user/signup"
    try {
      const response = await axios.post('http://localhost:3000/user/signup', {
        username: username,
        email: email,
        password: password,
      });
      console.log('response.data', response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>S'inscrire</h1>
      <div>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div>
            <input
              type="checkbox"
              id="subscribeNews"
              name="subscribe"
              value="newsletter"
            />
            <label htmlFor="subscribeNews">S'inscrire à notre newsletter</label>
          </div>

          <input type="submit" value="S'inscrire" className="input-submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
