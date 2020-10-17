import React from 'react';
import ReactDOM from 'react-dom';
import MRoute from './routes/index';
import * as serviceWorker from './serviceWorker';

// 引入antd.css
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <MRoute />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();