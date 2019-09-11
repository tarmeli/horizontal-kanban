import { Content, Nav } from './';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../data/constants';

import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login] = useMutation(LOGIN_MUTATION);
  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    const logindata = await login({ variables: { email: email.value, password: password.value } });

    if (logindata) {
      // handle cookies
      setIsLoggedIn(true);
      console.log('token', logindata.data.login.token);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password } = e.target;
    const signupdata = await signup({ variables: { name: name.value, email: email.value, password: password.value } });

    if (signupdata) {
      // handle cookies
      setIsLoggedIn(true);
      console.log('token', signupdata.data.signup.token);
    }
  };

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} />
      <Content
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export { App };
