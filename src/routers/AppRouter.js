import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path='/login'
            isAuthenticated={user.logged}
            component={LoginScreen}
          />
          <PrivateRoute
            path='/'
            isAuthenticated={user.logged}
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
