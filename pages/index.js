import React, { useContext } from 'react';
import { Context } from '../context';
import { useRouter } from 'next/router';

import axios from 'axios';

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();



  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        'https://api.chatengine.io/users/',
        { username, secret },
        { headers: { 'Private-key': 'd980513d-5e9e-4cb0-8ce1-2701dfa3dd5a' } }
      )
      .then((res) => router.push('/chats'));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS chat</div>

          <div className="input-container">
            <input
              className="text-input"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              className="text-input"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
