import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import './index.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email,password);
    navigateToHome();
  }
  function navigateToForgotPassword() {
    history.push('/ForgotPassword');
  }

  function navigateToHome() {
    history.push('/Home');
  }

  return (
    <div className="container">
      <img src={logo} alt="EmailMarketing" className="image" />
      <div className="content">
        <form>
          <label htmlFor="email">E-Mail *</label>
          <input
            type="email"
            className="email"
            placeholder="Digite seu email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <label htmlFor="ForgotPassword" onClick={navigateToForgotPassword}>Esqueci minha senha</label>
          <button className="btns" onClick={handleSubmit}>
            <p>Entrar</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
