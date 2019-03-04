import { 
  createStore,
  applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/index';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['SET_SELECTED_MOVIE']
  }

//extrae el reducer de navigation
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigation
)

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(
    persistedReducer,
    applyMiddleware(navigationMiddleware)
    )
const persistor = persistStore(store)

export { store, persistor }
