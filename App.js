import React from 'react';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import ZipcodeValidate from './src/screens/ZipcodeValidate';

function App() {
  return (
    <Provider store={store}>
      <ZipcodeValidate />
    </Provider>
  );
};

export default App;
