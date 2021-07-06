import React from 'react';

const LoginScreen = () => {
  const handleClick = () => {
    console.log('click');
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
