import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';

import Books from './components/Books';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Books />
    </Provider>
  );
};

export default App;