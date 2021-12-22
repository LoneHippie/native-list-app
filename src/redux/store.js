import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './lists';

export default configureStore({
    reducer: {
        lists: listsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});