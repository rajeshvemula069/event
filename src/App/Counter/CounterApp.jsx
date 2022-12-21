import React from 'react';
import { Provider } from  'react-redux';
import CounterApp from './CounterApp';
import {CounterStore} from './create.store';



function CounterAppwithStore(){
    return <Provider store={CounterStore}>
        <CounterApp/>
    </Provider>
}
export default CounterAppwithStore;