import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './Reducer';
const store = configureStore({
    reducer:CounterReducer
});
export default store;