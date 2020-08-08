import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaQuery from 'react-responsive';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

    {/* スマートフォン表示用 */}
    <MediaQuery query="(max-width: 767px)">
      <App />
    </MediaQuery>

    {/* PC表示用 */}
    <MediaQuery query="(min-width: 768px)">
      <App />
    </MediaQuery>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
