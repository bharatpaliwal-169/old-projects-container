import { createStore } from "redux";
import {persistStore} from 'redux-persist';

import rootReducer from "./root.reducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store);

export {store, persistor};