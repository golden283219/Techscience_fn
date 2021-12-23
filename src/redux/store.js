import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer/rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'result' ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
// export const store  = createStore(persistedReducer, {}, applyMiddleware(thunk, createLogger()))

export const dispatch = store.dispatch;

export const persistor = persistStore(store);