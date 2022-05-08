import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (element, { onNavigate, currentPathParent }) => {
  const history = createMemoryHistory({
    initialEntries: [currentPathParent],
  });
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, element);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      nextPathname && pathname !== nextPathname && history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#_auth-dev-root');
  element && mount(element, {});
}
export { mount };
