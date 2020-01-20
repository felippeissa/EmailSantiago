import React,{ useState } from 'react';
import logo from '../../assets/logo.jpg';
import './index.css';

function Forgotpassword({ history }) {

  const [email,setEmail] = useState('');

  function handleForgotPassword(event) {
    event.preventDefault();
    alert(`Uma Mensagem foi enviada para: ${email} .Verifique sua caixa de entrada`);
    console.log(email);
    navigateToLogin();
  }

  function navigateToLogin() {
    history.push('/');
  }

  return (
    <div className="container">
      <img src={logo} alt="EmailMarketing" className="image" />
      <div className="content">
        <form>
          <label htmlFor="email">Digite Seu email de recuperação </label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@hmail.com "
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit" onClick={handleForgotPassword}>Recuperar senha</button>
          <button className="btn" type="submit" onClick={navigateToLogin}>Voltar</button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;