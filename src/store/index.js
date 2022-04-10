import { configureStore } from '@reduxjs/toolkit';
import createRootReducer from './reducers';

export function configureAppStore() {
    const store = configureStore({
        reducer: createRootReducer(),
        devTools: process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL.length > 0,
    });
    return store;
}
