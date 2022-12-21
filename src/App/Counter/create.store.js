
import {createStore} from 'redux';
import {CounterReducer} from './Counter.Reducer';
export let CounterStore = createStore(CounterReducer);