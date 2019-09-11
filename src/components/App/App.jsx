import { Content, Nav } from './';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../data/constants';
import { useLocalStorage } from '../../hooks/';
import React, { useEffect } from 'react';

import { useMutation } from '@apollo/react-hooks';


const App = () => {
  const [login] = useMutation(LOGIN_MUTATION);
  const [signup] = useMutation(SIGNUP_MUTATION);
  const [token, setToken] = useLocalStorage('token', '');

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token, setToken]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    const logindata = await login({ variables: { email: email.value, password: password.value } });

    if (logindata) {
      setToken(logindata.data.login.token);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password } = e.target;
    try {
      await signup({ variables: { name: name.value, email: email.value, password: password.value } });
      window.alert('register succesfull');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="App">
      <Nav token={token} />
      <Content
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        token={token}
        setToken={setToken}
      />
    </div>
  );
};

export { App };
