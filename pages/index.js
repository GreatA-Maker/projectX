import React, { useContext, useState } from 'react';
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
      .post('https://red-cloudy-pike.cyclic.app/admin/new', {
        email: username,
        password: secret,
      })
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
