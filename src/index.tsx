import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

