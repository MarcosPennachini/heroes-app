import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AUTH_LOGOUT } from '../../actions/action-types';
import { AuthContext } from '../../auth/AuthContext';

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: AUTH_LOGOUT,
    });

    history.replace('/login');
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark container-fluid'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div className='navbar-nav'>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/dc'
          >
            DC
          </NavLink>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/search'
          >
            Search
          </NavLink>
        </div>
        <div className='navbar-nav w-100 order-3 dual-collapse2 justify-content-end'>
          <ul className='navbar-nav'>
            <span className='nav-item nav-link text-info'> {user.name} </span>
            <button className='nav-item nav-link btn' onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
