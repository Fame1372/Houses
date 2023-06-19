import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer.store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'home', 'tokenInfo'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export { store, persistor };
