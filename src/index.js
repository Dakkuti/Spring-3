import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  AppRoutes  from './routes/AppRoutes';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,

      
    document.getElementById('root')
);
