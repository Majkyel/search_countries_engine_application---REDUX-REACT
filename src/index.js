import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store.js';
import DevTools from './DevTools.js';


render(
    <Provider store={store}>
        <div>
            <h1>HELLO!!</h1>
            <DevTools/>
        </div>  
    </Provider>,
    document.getElementById('root')
);
