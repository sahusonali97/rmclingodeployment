import React from 'react';
import ReactDOM from 'react-dom';
import './indigo.css';

import {TolgeeProvider} from "@tolgee/react";

import Apply from './Apply';
import Apply from './Apply';
ReactDOM.render(
  <React.StrictMode>
    <TolgeeProvider
        staticData={{
          en: () => import('../i18n/en.json'),
          ru: () => import('../i18n/ru.json'),
        }}
        loadingFallback={<>Loading...</>}
    >
      <Apply />
    </TolgeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
