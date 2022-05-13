import './i18n';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchContainer from './search/SearchContainer';

const appName: string = 'rekry-search';
const rootElement: HTMLElement|null = document.getElementById('job-search');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ReactiveBase
        app={appName}
        url={process.env.REACT_APP_ELASTIC_URL}
      >
        <SearchContainer />
      </ReactiveBase>
    </React.StrictMode>
    
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
