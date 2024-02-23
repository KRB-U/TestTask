import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import './normalize.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from 'components/redux/sotre';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename="/TestTask" */}
    <BrowserRouter basename="/TestTask">
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
