import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});
export default () => {
  const [signedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header
            signedIn={signedIn}
            onSignOut={() => console.log('sign out')}
          />
          <Switch>
            <Route path="/auth">
              <AuthApp />
            </Route>
            <Route path="/">
              <MarketingApp />
            </Route>
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};
