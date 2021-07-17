import React, { useContext } from 'react';
import { AUTH_LOGIN } from '../../actions/action-types';
import { AuthContext } from '../../auth/AuthContext';

const LoginScreen = ({ history }) => {
  const userDemo = 'Marcos';
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({
      type: AUTH_LOGIN,
      payload: {
        name: userDemo,
      },
    });

    history.replace('/');
  };

  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      <hr />
      <button className='btn btn-primary' onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
