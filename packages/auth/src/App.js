import React from 'react';
import { SignIn, SignUp } from './components';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Switch, Route, Router } from 'react-router-dom';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
