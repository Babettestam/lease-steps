import React from 'react';
import Home from 'pages/Home/Home';
import ReactDOM from 'react-dom/client';
import ThemeContainer from 'styles/ThemeContainer';
import reportWebVitals from './reportWebVitals';
import globalStyles from 'styles/global.styles';
import { Global } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeContainer>
    <Global styles={globalStyles} />
    <Home />
  </ThemeContainer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
