import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import App from './app/app';
import theme from './theme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        {/* <CssBaseline /> */}
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
