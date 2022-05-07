import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (element, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  onNavigate && history.listen(onNavigate);
  ReactDom.render(<App history={history} />, element);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#_marketing-dev-root');
  element && mount(element, { defaultHistory: createBrowserHistory() });
}

export { mount };
